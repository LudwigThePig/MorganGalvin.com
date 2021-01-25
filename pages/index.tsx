import Head from 'next/head'
import {Header} from '../components/Header'
import { SearchResultProps } from '../components/SearchResults/SearchResult';
import { SerachResultsContainer } from '../components/SearchResults/SearchResultsContainer';
import styles from '../styles/Home.module.css'

const fakeSearchResults: SearchResultProps[] = [
  {
    id: '0',
    header: 'Ludwig the Pig',
    body: 'A website by pigs, for pigs.',
    url: 'https://ludwigthepig.com',
  },
  {
    id: '1',
    header: 'Google',
    body: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking ...',
    url: 'https://google.com',
  },
];


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Morgan Galvin - Moogle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid-cols-2 grid-rows-2 h-screen w-screen">
        <Header />
        <SerachResultsContainer results={fakeSearchResults} />
      </main>
    </div>
  )
}
