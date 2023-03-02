
export default async function RootLayout({children, params}) {

  const getSurahName = async (noSurah) =>{
    const res = await fetch("https://equran.id/api/v2/surat")
    const surahs = await res.json()
    const filteredName = surahs.data.filter(surah=> surah.nomor == noSurah)
    return filteredName
  }
  

  const surahName = await getSurahName(params.slugSurah)

  return (
    <>
        <h1 className="text-center text-2xl mt-3 arabic">Surah {surahName[0].nama}</h1>
        {children}
    </>
  )
}
