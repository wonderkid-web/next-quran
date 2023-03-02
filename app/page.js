import Image from 'next/image'
import { Inter } from '@next/font/google'
import Quran from './Components/Quran'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Quran />
    </>
   
  )
}
