import { CurrencyDollarSimple } from 'phosphor-react'

interface WalletCardProps {
  showFormatted?: boolean
  balance: number
}
export function WalletCard({ balance }: WalletCardProps) {
  // const currency = showFormatted ? formatPoints(balance) : balance
  const roundedBalance = Math.round(balance)
  return (
    <div className="flex cursor-pointer items-stretch">
      <div className="flex items-center gap-2 rounded-bl-md rounded-tl-md bg-background px-2 py-1 pr-4 font-bold uppercase text-white md:text-lg">
        <span className="rounded-full bg-purpleDark p-1">
          <CurrencyDollarSimple weight="bold" />
        </span>
        <span title={String(balance)}>{roundedBalance}</span>
      </div>
      <span
        title="Plinko Points"
        className="rounded-br-md rounded-tr-md bg-purpleDark p-2 font-bold text-white"
      >
        PP
      </span>
    </div>
  )
}
