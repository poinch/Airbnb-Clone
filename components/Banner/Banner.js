import Image from 'next/image'
import bannerImg from '../../public/Banner.webp'
import Button from '../Button/Button'

function Banner() {
  return (
    <div 
      className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'
    >
      <Image 
        src={bannerImg}
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>
          Not sure where to go? Perfect.
        </p>
        <Button text="I'm Flexible" color='purple' />
      </div>
    </div>
  )
}

export default Banner
