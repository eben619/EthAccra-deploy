import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {altone, altoneBold, gilroy} from '@/font'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        /* :root {
          --altone-font: ${altone.style.fontFamily};
          --altone-bold-font: ${altoneBold.style.fontFamily}
          --gilroy-font: ${gilroy.style.fontFamily};
        } */
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
