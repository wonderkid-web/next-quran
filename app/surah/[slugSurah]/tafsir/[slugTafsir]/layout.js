export default async function RootLayout({ children, params }) {
  // const getSurahName = async (namaSurah) => {
  //   const res = await fetch("https://equran.id/api/v2/surat");
  //   const surahs = await res.json();
  //   const filteredName = surahs.data.filter(
  //     (surah) => surah.namaLatin == namaSurah
  //   );
  //   return filteredName;
  // };

  // const surahName = await getSurahName(params.slugSurah);

  return (
    <div className="block h-fit w-fit">
      {/* <h1 className="text-center text-2xl mt-3 arabic">Surah</h1> */}
      {children}
    </div>
  );
}
