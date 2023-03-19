import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>URL Shortening</title>
        <meta name='description' content='URL Shortening api page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href={"../../images/favicon-32x32.png"}
          type='image/icon type'
        ></link>
      </Head>
      <section className={`${poppins.variable}`}>
        <h1 className='bg-teal-500 font-poppins'>This is test heading</h1>
      </section>
    </>
  );
}
