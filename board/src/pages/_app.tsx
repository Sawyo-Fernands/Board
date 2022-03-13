import {AppProps} from "next/app"
import '../styles/global.scss'

import { Header } from "../components/header"

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import {Provider as NextAuthProvider} from 'next-auth/client'

const initialOptions={
  "client-id": "AVeNs0gO5IRo8iggU1NGIbteebsUO2hYhbZm0bny4vN_yTPCum9CjR2ete3MDgT5YLVCVRN8d3M-LXqZ",
    currency: "BRL",
    intent: "capture",

}

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
    <PayPalScriptProvider options={initialOptions}>
      <Header/>
      <Component {...pageProps} />
    </PayPalScriptProvider>
    </NextAuthProvider>

  )
}

export default MyApp
