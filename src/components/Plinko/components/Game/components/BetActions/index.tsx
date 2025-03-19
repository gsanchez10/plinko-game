// import { useRouter } from 'next/router'
import CustomModal from 'components/CustomModal'
import { CurrencyDollarSimple } from 'phosphor-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAuthStore } from 'store/auth'

import { LinesType } from '../../@types'

interface PlinkoBetActions {
  onRunBet: (betValue: number) => void
  onChangeLines: (lines: LinesType) => void
  inGameBallsCount: number
  cancelBet: () => void
}

const MAX_LINES = 16

const getLinesOptions = (maxLinesQnt: number) => {
  const linesOptions: number[] = []
  for (let i = 8; i <= maxLinesQnt; i++) {
    linesOptions.push(i)
  }
  return linesOptions
}

export function BetActions({
  onRunBet,
  onChangeLines,
  inGameBallsCount,
  cancelBet
}: PlinkoBetActions) {
  const isLoading = useAuthStore(state => state.isWalletLoading)
  const currentBalance = useAuthStore(state => state.wallet.balance)
  const maxBet = useAuthStore(state => state.user.maxBet)
  const limitReachedMessage = useAuthStore(
    state => state.user.limitReachedMessage
  )
  // const decrementCurrentBalance = useAuthStore(state => state.decrementBalance)
  const isAuth = useAuthStore(state => state.isAuth)
  const [rawBetValue, setBetValue] = useState<number | ''>('')
  const betValue = rawBetValue as number
  const linesOptions: number[] = getLinesOptions(MAX_LINES)
  // const router = useRouter()
  // const { token } = router.query

  function handleChangeBetValue(e: ChangeEvent<HTMLInputElement>) {
    if (!isAuth || isLoading) return
    e.preventDefault()
    const value = e.target.value
    const newBetValue = value // >= currentBalance ? currentBalance : value
    if (newBetValue === '') {
      setBetValue('')
    } else {
      setBetValue(
        Math.max(0, Math.min(parseInt(newBetValue), maxBet, currentBalance))
      )
    }
  }

  function handleChangeLines(e: ChangeEvent<HTMLSelectElement>) {
    if (!isAuth || isLoading) return

    onChangeLines(Number(e.target.value) as LinesType)
  }

  function handleHalfBet() {
    if (!isAuth || isLoading) return
    const value = betValue / 2
    const newBetvalue = value <= 0 ? 0 : Math.floor(value)
    setBetValue(newBetvalue)
  }

  function handleDoubleBet() {
    if (!isAuth || isLoading) return
    const value = betValue * 2

    if (value >= currentBalance) {
      setBetValue(currentBalance)
      return
    }

    const newBetvalue = value <= 0 ? 0 : Math.floor(value)
    setBetValue(newBetvalue)
  }

  function handleMaxBet() {
    if (!isAuth || isLoading) return
    setBetValue(Math.max(0, Math.min(maxBet, currentBalance)))
  }

  async function handleRunBet() {
    if (!isAuth || isLoading) return
    if (inGameBallsCount >= 15) return
    if (betValue > currentBalance) {
      setBetValue(currentBalance)
      return
    }
    onRunBet(betValue)
    // if (betValue <= 0) return
    // await decrementCurrentBalance(token as string, betValue)
  }

  useEffect(() => {
    if (limitReachedMessage) {
      cancelBet()
    }
  }, [cancelBet, limitReachedMessage])

  return (
    <div className="relative h-1/2 w-full flex-1 px-4 py-8">
      <span className="absolute left-4 top-0 mx-auto text-xs font-bold text-text md:text-base">
        *balls in game {inGameBallsCount}/15
      </span>

      <div className="flex h-full flex-col gap-4 rounded-md bg-primary p-4 text-text md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-stretch gap-1 md:flex-col">
            <div className="w-full text-sm font-bold md:text-base">
              <div className="flex flex-1 items-stretch justify-between">
                <span>Enter bet (Max ${maxBet})</span>
                <div className="flex items-center gap-1">
                  <div className="rounded-full bg-purpleDark p-0.5">
                    <CurrencyDollarSimple weight="bold" />
                  </div>
                  <span>{(betValue || 0).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-stretch justify-center shadow-md">
                <input
                  type="number"
                  min={0}
                  max={maxBet || currentBalance}
                  onChange={handleChangeBetValue}
                  value={betValue}
                  className="w-full rounded-bl-md rounded-tl-md border-2 border-secondary bg-background p-2.5 px-4 font-bold transition-colors placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none md:p-2"
                />
                <button
                  onClick={handleHalfBet}
                  className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                >
                  ½
                </button>
                <button
                  onClick={handleDoubleBet}
                  className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:right-0 after:top-[calc(50%_-_8px)] after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                >
                  2x
                </button>
                <button
                  onClick={handleMaxBet}
                  className="rounded-br-md rounded-tr-md border-2 border-transparent bg-secondary p-2 px-3 text-xs transition-colors hover:bg-secondary/80 focus:border-purple focus:outline-none"
                >
                  max
                </button>
              </div>
            </div>

            <button
              onClick={handleRunBet}
              disabled={isLoading}
              className="block rounded-md bg-purple px-2 py-4 text-sm font-bold leading-none text-background transition-colors hover:bg-purpleDark focus:outline-none focus:ring-1 focus:ring-purple focus:ring-offset-1 focus:ring-offset-primary disabled:bg-gray-500 md:hidden"
            >
              Drop Ball
            </button>
          </div>
          <select
            disabled={inGameBallsCount > 0}
            onChange={handleChangeLines}
            defaultValue={16}
            className="w-full rounded-md border-2 border-secondary bg-background px-4 py-2 font-bold transition-all placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none disabled:line-through disabled:opacity-80"
            id="lines"
          >
            {linesOptions.map(line => (
              <option key={line} value={line}>
                {line} Lines
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleRunBet}
          disabled={isLoading}
          className="hidden rounded-md bg-purple px-6 py-5 font-bold leading-none text-background transition-colors hover:bg-purpleDark focus:outline-none focus:ring-1 focus:ring-purple focus:ring-offset-1 focus:ring-offset-primary disabled:bg-gray-500 md:visible md:block"
        >
          Drop Ball
        </button>
      </div>
      <CustomModal
        isOpen={!!limitReachedMessage}
        contentLabel="Limit Reached"
        className="fixed inset-0 z-50 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="w-64 rounded-lg bg-white p-4 shadow-lg">
          <h2 className="mb-2 text-lg font-bold">Limit Reached</h2>
          <p className="mb-4 text-sm text-gray-700">{limitReachedMessage}</p>
        </div>
      </CustomModal>
    </div>
  )
}
