const plinkoLogo = '/assets/img/logo.svg'

export function Footer() {
  return (
    <div className="sticky bottom-0 left-0 flex w-full flex-col items-center justify-center bg-primary py-2">
      <img src={plinkoLogo} alt="" width="100" />
    </div>
  )
}
