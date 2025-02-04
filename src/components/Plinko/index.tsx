import { Navbar } from '../../components/Navbar'
import { useEffect } from 'react'
import { useAuthStore } from 'store/auth'
import { useGameStore } from 'store/game'

import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { Game } from './components/Game'
import { useRouter } from 'next/router'

export function PlinkoGamePage() {
  const isLoading = useAuthStore(state => state.isAuthLoading)
  const isAuth = useAuthStore(state => state.isAuth)
  const signIn = useAuthStore(state => state.signIn)
  const router = useRouter()
  const { token } = router.query
  useEffect(() => {
    signIn(token as string)
  }, [token, signIn])
  const alertUser = (e: BeforeUnloadEvent) => {
    if (gamesRunning > 0) {
      e.preventDefault()
      alert('Do you really want to leave?')
      e.returnValue = ''
    }
  }
  const gamesRunning = useGameStore(state => state.gamesRunning)
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [gamesRunning])
  if (!isAuth) {
    return null
  }
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-background">
      <Navbar />
      <div className="flex h-full w-full max-w-[1400px] flex-1 overflow-auto overflow-x-hidden pt-4 lg:mx-auto">
        <div className="flex-1">{isLoading ? <Loading /> : <Game />}</div>
      </div>
      <Footer />
    </div>
  )
}
