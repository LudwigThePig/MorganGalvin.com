import Head from 'next/head'
import SearchBar from '../components/searchBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Morgan Galvin - Moogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} grid-cols-2 grid-rows-2 h-screen w-screen`}>
        <SearchBar />
      </main>
    </div>
  )
}
