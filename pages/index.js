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
      <p>{data.Data.CasePhoneNumber}</p>
      <p>{data.Data.CaseWebsiteContent[1].Content}</p>
    </div>
  );
}

export async function getStaticProps(){

  const response = await fetch('https://apiwww.simpluris.com/api/case?caseUrl=qaclient.simpluris.com&lang=us');

  const data = await response.json();

  return {
    props: {
      data
    }
  }

}
