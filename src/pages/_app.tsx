import {AppProps} from "next/app"
import '../styles/global.scss'

import { Header } from "../components/header"

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import {Provider as NextAuthProvider} from 'next-auth/client'

const initialOptions={
  "client-id": "ARyb_TCAu-BPrhg0I6gwsVjbSlqTr6LPvKFCpLQhwKyIhPZtk-lFzjPg60JlChj-HUApcCnGtQd3Q-PL",
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
