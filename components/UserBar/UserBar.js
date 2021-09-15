import { 
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon 
} from '@heroicons/react/solid'

function UserBar() {
  return (
    <div className='flex space-x-4 items-center justify-end text-gray-500 w-auto'>
      <p className='hidden text-center md:inline cursor-pointer'>Become a&nbsp;Host</p>
      <GlobeAltIcon className='h-6 cursor-pointer' />
      <div className='flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer'>
        <MenuIcon className='h-6' />
        <UserCircleIcon className='h-6' />
      </div>
    </div>
  )
}

export default UserBar