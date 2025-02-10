// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { Inter } from 'next/font/google'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import '../styles/global.css'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need
  variable: '--font-baloo' // Optional: Define a CSS variable
})

// const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={baloo.className}>
      <Component {...pageProps} />
      {/* <ToastContainer theme="dark" /> */}
    </div>
  )
}
