import Head from 'next/head'
import Header from '../components//Header/Header'
import Banner from '../components/Banner/Banner'
import ExploreNearby from '../components/Explore Nearby/ExploreNearby'
import LiveAnywhere from '../components/Live Anywhere/LiveAnywhere'
import LargeCard from '../components/LargeCard/LargeCard'

export default function Home({ exploreNearbyData, liveAnywhereData }) {
  return (
    <div>
      <Head>
        <title>Airbnb-Fullclone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:p-16'>
        <ExploreNearby exploreNearbyData={exploreNearbyData} />
        <LiveAnywhere liveAnywhereData={liveAnywhereData} />
        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
    </div>
  )
}

export async function getStaticProps(context) {  
  const exploreNearbyData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json())

  const liveAnywhereData = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json())

  return {
    props: {
      exploreNearbyData,
      liveAnywhereData,
    }, 
  }
}