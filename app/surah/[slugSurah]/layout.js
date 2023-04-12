import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
