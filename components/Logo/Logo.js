import Image from 'next/image'
import logoImg from '../../public/Airbnb_Logo_.svg.webp'

function Logo() {
  return (
    <div className='relative flex items-center h-10 cursor-pointer my-auto'>
      <Image 
        src={logoImg}
        layout='fill'
        objectFit='contain'
        objectPosition='left'
      />
    </div>
  )
}

export default Logo
