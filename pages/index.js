import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({data}) {
  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{data.Data.OfficialCaseName}</h1>

      <div>
        {data.Data.CasePhoneNumber}
      </div>
    </div>
  );
}

export async function getStaticProps(){

  const response = await fetch('https://apiwww.simpluris.com/api/case?caseUrl=acmesettlement.com&lang=us');

  const data = await response.json();

  return {
    props: {
      data
    }
  }

}
