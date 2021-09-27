import SmallCard from '../Explore Nearby/SmallCard/SmallCard'

function ExploreNearby({ exploreNearbyData }) {
  return (
    <section className='pt-6'>
      <h2 className='text-4xl font-semibold pb-5'>
        Explore Nearby
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreNearbyData?.map(({ img, location, distance }, index) => {
          return (
            <SmallCard 
              key={index} 
              img={img} 
              location={location} 
              distance={distance} 
            />
          )
        })}
      </div>
    </section>
  )
}

export default ExploreNearby


