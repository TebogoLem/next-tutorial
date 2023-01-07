import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, iure
        dolor non alias veniam cumque soluta cupiditate eum suscipit
        necessitatibus? Ad molestias laborum assumenda non. Culpa aliquid
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        accusantium quo quod autem cumque. Error, hic! Minima unde at quas
        perspiciatis odit voluptas animi f
      </p>

      <Link href="/bugattis" className={styles.btn}>
        See all gattis
      </Link>
    </>
  );
}
