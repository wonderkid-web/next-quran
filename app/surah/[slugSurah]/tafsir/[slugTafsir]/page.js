export default async function Tafsir({ params }) {
  const detectNomorSurah = async (namaSurah) => {
    const res = await fetch(`https://equran.id/api/v2/surat`);
    const arraySurah = await res.json();
    const filteredSurah = await arraySurah.data.filter(
      (surah) => surah.namaLatin == namaSurah
    );
    return filteredSurah[0].nomor;
  };

  const fetchSingleTafsir = async (nomorAyat) => {
    const res = await fetch(`https://equran.id/api/v2/tafsir/${nomorAyat}`);
    const rawAyat = await res.json();
    return rawAyat.data.tafsir.filter((tafsir) => tafsir.ayat == nomorAyat);
  };

  const nomorSurah = await detectNomorSurah(params.slugSurah);

  const singleTafsirAyat = await fetchSingleTafsir(nomorSurah);

  return (
    <div>
      {singleTafsirAyat.map((tafsir) => (
        <div key={params.slugTafsir} className="rounded-md w-1/2 mx-auto mb-5">
          <h1 className="font-semibold cursor-pointer text-lg text-center bg-emerald-700 my-5 text-white rounded-md inline-block p-3">
            Tafsir {params.slugSurah} ayat {params.slugTafsir}
          </h1>
          <div
            className="space rounded-md border-emerald-700 border-2 p-3"
            dangerouslySetInnerHTML={{ __html: tafsir.teks }}
          />
        </div>
      ))}
    </div>
  );
}
