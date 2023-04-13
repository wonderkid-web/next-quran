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

  const getNextSurah = async (currentSurah) => {
    if (currentSurah < 113) {
      const raw = await fetch(`https://equran.id/api/v2/surat/${currentSurah}`);
      const res = await raw.json();
      const nextNamaSurah = res.data.suratSelanjutnya.namaLatin;
      const nextUrl = `https://next-quran-seven.vercel.app/surah/${nextNamaSurah}`;
      return nextUrl;
    } else {
      const nextUrl = `https://next-quran-seven.vercel.app/surah/Al-Fatihah`;
      return nextUrl;
    }
  };
  const getPrevSurah = async (currentSurah) => {
    if (currentSurah > 1) {
      const raw = await fetch(`https://equran.id/api/v2/surat/${currentSurah}`);
      const res = await raw.json();
      const nextNamaSurah = res.data.suratSebelumnya.namaLatin;
      const nextUrl = `https://next-quran-seven.vercel.app/surah/${nextNamaSurah}`;
      return nextUrl;
    } else {
      const nextUrl = `https://next-quran-seven.vercel.app/surah/An-Nas`;
      return nextUrl;
    }
  };

  const fetchSurah = async (nomorSurah) => {
    const res = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
    const surahs = await res.json();
    return surahs;
  };

  let clearParams = params.slugSurah;
  if (params.slugSurah == `Ali%20'Imran`) clearParams = `Ali 'Imran`;

  const nomorSurah = await destructSurah(clearParams);
  const arraySurah = await fetchSurah(nomorSurah);
  const nextSurah = await getNextSurah(nomorSurah);
  const prevSurah = await getPrevSurah(nomorSurah);

  return (
    <div className="flex flex-col w-4/5 m-5 lg:w-1/2 mx-auto mt-10 gap-3">
      {arraySurah.data.ayat.map((ayat, index) => {
        return (
          <div
            id={ayat.nomorAyat}
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

      <Link
        href={prevSurah}
        className=" text-2xl md:text-3xl p-2 fixed left-5 bottom-4 cursor-pointer rounded-md bg-emerald-500"
      >
        ⏮
      </Link>

      <Link
        href={nextSurah}
        className=" text-2xl md:text-3xl p-2 fixed right-5 bottom-4 cursor-pointer rounded-md bg-emerald-500"
      >
        ⏭
      </Link>
    </div>
  );
}
