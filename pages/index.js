import Head from 'next/head'
import Header from '../components//Header/Header'
import Banner from '../components/Banner/Banner'
import ExploreNearby from '../components/Explore Nearby/ExploreNearby'

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-Fullclone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:p-16'>
        <ExploreNearby exploreData={exploreData} />
      </main>
    </div>
  )
}

export async function getStaticProps(context) {  
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json())

  return {
    props: {
      exploreData
    }, 
  }
}