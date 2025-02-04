// import { onValue, ref } from 'firebase/database'
// import { database } from 'lib/firebase'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuthStore } from 'store/auth'

import { Footer } from '../../components/Footer'
import { Loading } from '../../components/Loading'
import { Navbar } from '../../components/Navbar'

export function DefaultLayout() {
  const isLoading = useAuthStore(state => state.isAuthLoading)
  const signIn = useAuthStore(state => state.signIn)
  useEffect(() => {
    signIn()
  }, [])

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-background">
      <Navbar />
      <div className="flex h-full w-full max-w-[1400px] flex-1 overflow-auto overflow-x-hidden pt-4 lg:mx-auto">
        <div className="flex-1">{isLoading ? <Loading /> : <Outlet />}</div>
      </div>
      <Footer />
    </div>
  )
}
