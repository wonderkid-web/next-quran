import Link from "next/link";

export default async function Surah({ params }) {
  const destructSurah = async (namaSurah) => {
    const res = await fetch(`https://equran.id/api/v2/surat`);
    const arraySurah = await res.json();
    const filteredSurah = await arraySurah.data.filter(
      (surah) => surah.namaLatin == namaSurah
    );
    return filteredSurah[0].nomor;
  };

  const fetchSurah = async (nomorSurah) => {
    const res = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
    const surahs = await res.json();
    return surahs;
  };

  const nomorSurah = await destructSurah(params.slugSurah);
  const arraySurah = await fetchSurah(nomorSurah);
  return (
    <div className="flex flex-col w-4/5 m-5 lg:w-1/2 mx-auto mt-10 gap-3">
      {arraySurah.data.ayat.map((ayat, index) => {
        return (
          <div
            key={index}
            className={`rounded-xl border-2 border-cyan-700 p-4`}
          >
            <p className="text-2xl border-r-2 w-fit pr-2 border-emerald-700">
              {ayat.nomorAyat}
            </p>
            <p className="text-right leading-loose font-normal text-2xl m-2 arabic">
              {ayat.teksArab}
            </p>
            <p className="m-2 mt-4">{ayat.teksIndonesia}</p>
            <p className="text-right">
              <Link
                href={`/surah/${params.slugSurah}/tafsir/${ayat.nomorAyat}`}
                className="rounded-md p-2 text-white bg-emerald-700"
              >
                Tafsir Ayat ini
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}
