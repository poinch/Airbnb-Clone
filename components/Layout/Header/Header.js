import Logo from '../../Logo/Logo'
import SearchBar from '../../SearchBar/SearchBar'
import UserBar from '../../UserBar/UserBar'

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <Logo />
      <SearchBar />
      <UserBar />
    </header>
  )
}

export default Header
