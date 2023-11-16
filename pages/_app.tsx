import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "@/components/Theme/Navbar";
import {Inter} from "next/font/google";


const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <div className="bg-[#f7faff] flex min-h-screen flex-col">
    <Navbar />
    <main
        className={`flex flex-col items-center justify-center mt-10 max-w-5xl mx-auto px-4 pb-12 ${inter.className}`}
    >
      <Component {...pageProps} />
    </main>
  </div>
}
