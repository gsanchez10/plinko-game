// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { Inter } from 'next/font/google'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import '../styles/global.css'

// const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/* <ToastContainer theme="dark" /> */}
    </>
  )
}
