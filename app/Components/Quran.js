import styles from "../css/surah.module.css";
import React from "react";
import Link from "next/link";

export default async function Quran() {
  const getSurah = async () => {
    const res = await fetch("https://equran.id/api/v2/surat");
    const surahs = await res.json();
    return surahs;
  };

  const surahs = await getSurah();
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 gap-4">
      {surahs.data.map((surah) => (
        <Link key={surah.nomor} href={`/surah/${surah.nomor}/`}>
          <div
            
            className={`grid grid-cols-3 items-center rounded-xl border-2 border-cyan-700 p-2 cursor-pointer`}
          >
            <p className="text-2xl border-r-2 w-fit pr-2 border-emerald-700">
              {surah.nomor}
            </p>
            <p className="">{surah.namaLatin}</p>
            <p className="w-fit justify-self-end bg-emerald-700 p-2 rounded-md text-white">
              {surah.tempatTurun}
            </p>
            {/* <p className={`${styles.active}`} dangerouslySetInnerHTML={{ __html: surah.deskripsi }} />
          <button className="border-3 bg-emerald-600 text-white w-fit p-2">
            Baca Lebih
          </button> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
