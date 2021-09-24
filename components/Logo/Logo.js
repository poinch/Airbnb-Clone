import Image from 'next/image'
import logoImg from '../../public/Airbnb_Logo.svg.webp'

function Logo({ resetRouter }) {
  return (
    <div 
      className='relative flex items-center h-10 cursor-pointer my-auto'
      onClick={resetRouter}
    >
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
