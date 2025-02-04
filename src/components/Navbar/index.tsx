import classNames from 'classnames'
import Link from 'next/link'
import { useAuthStore } from 'store/auth'
import { useGameStore } from 'store/game'

import { WalletCard } from '../WalletCard'
const plinkoLogo = '/assets/img/logo.svg'

export function Navbar() {
  const inGameBallsCount = useGameStore(state => state.gamesRunning)
  const currentBalance = useAuthStore(state => state.wallet.balance)
  const isAuth = useAuthStore(state => state.isAuth)

  return (
    <nav className="sticky top-0 z-50 bg-primary px-4 shadow-lg">
      <div
        className={classNames(
          'mx-auto flex h-16 w-full max-w-[1400px] items-center',
          {
            'justify-between': isAuth,
            'justify-center': !isAuth
          }
        )}
      >
        <Link href={inGameBallsCount ? '#!' : '/'}>
          <img src={plinkoLogo} alt="" className="w-32 md:w-40" />
        </Link>
        {isAuth && (
          <div className="flex items-stretch gap-4">
            {/* {currentBalance < 10 && (
              <Link
                replace
                to={inGameBallsCount ? '#!' : '/gifts'}
                title="Presente"
                className="animate-bounce text-text transition-colors hover:text-purple "
              >
                <Gift size="32" weight="fill" />
              </Link>
            )} */}
            <WalletCard balance={currentBalance} showFormatted />
          </div>
        )}
      </div>
    </nav>
  )
}
