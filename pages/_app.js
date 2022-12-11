import Navigation from '../components/navigation'
import '../styles/globals.css'
import { theme } from '../theme'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
