export default async function Surah({ params }) {
  const fetchSurah = async (nomorSurah) => {
    const res = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
    const arraySurah = await res.json();
    return arraySurah;
  };

  const arraySurah = await fetchSurah(params.slugSurah);

  // console.log(arraySurah.data.ayat)
  return (
    <div className="flex flex-col w-4/5 m-5 lg:w-1/2 mx-auto mt-10 gap-3">
      {arraySurah.data.ayat.map((ayat) => {
        return (
          <div
            className={`rounded-xl border-2 border-cyan-700 p-4`}
          >
            <p className="text-2xl border-r-2 w-fit pr-2 border-emerald-700">
              {ayat.nomorAyat}
            </p>
            <p className="text-right leading-loose font-normal text-2xl m-2 arabic">{ayat.teksArab}</p>
            <p className="m-2 mt-4">{ayat.teksIndonesia}</p>
          </div>
        );
      })}
    </div>
  );
}
