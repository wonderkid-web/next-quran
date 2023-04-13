import { Suspense } from "react";
import Loading from "./loading";

export default async function RootLayout({ children, params }) {
  const fetchSurah = async () => {
    const res = await fetch(`https://equran.id/api/v2/surat/1`);
    const surahs = await res.json();
    return surahs.data.ayat[0].teksArab;
  };

  const bismillah = await fetchSurah();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {params.slugSurah != "Al-Fatihah" && (
          <h2 className="text-3xl text-center arabic my-12">{bismillah}</h2>
        )}
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
