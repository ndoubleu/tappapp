import Footer from "@/common/footer";
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="bg-background font-futura font-regular min-h-screen w-screen text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
