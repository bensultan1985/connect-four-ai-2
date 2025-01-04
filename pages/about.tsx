import Head from "next/head";
import { Title } from "@mantine/core";
import styles from "../styles/Home.module.css";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About the website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title>About</Title>
        <p>
          BS Games was founded in 2020. After the popularity of Beardle,
          released in 2021, BS Games began developing more games. In 2025 the
          Boredom Sucks platform was launched to incorporate all new games.
        </p>
      </main>
    </div>
  );
}
