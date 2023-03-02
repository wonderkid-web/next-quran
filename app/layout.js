import './css/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <nav className='p-4 bg-emerald-600 text-2xl md:text-3xl lg:text-5xl text-white text-center'>
        <h1>Al-Quran</h1>
        <h1 className='text-xl mt-4'>Muhammad Wahyu Ramadhan</h1>
      </nav>

        {children}
        </body>
    </html>
  )
}
