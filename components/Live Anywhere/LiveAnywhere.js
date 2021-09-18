import MediumCard from '../MediumCard/MediumCard';

function LiveAnywhere({ liveAnywhereData }) {
  return (
    <section>
      <h2 className='text-4xl font-semibold py-8'>
        Live Anywhere
      </h2>
      <div className='flex overflow-scroll scrollbar-hide space-x-3 p-3 -ml-3'>
        {liveAnywhereData?.map(({ img, title }, index) => {
          return (
            <MediumCard 
              key={index}
              img={img}
              title={title}
            />
          )
        })}
      </div>
    </section>
  )
}

export default LiveAnywhere
