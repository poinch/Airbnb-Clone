import Head from 'next/head'
import Header from '../components/Layout/Header/Header'
import Banner from '../components/Layout/Banner/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb-Fullclone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
    </div>
  )
}
