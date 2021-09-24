import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import UserBar from '../UserBar/UserBar'
import Calendar from '../Calendar/Calendar'

function Header({ placeholder }) {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const getUpdatedInput = (e) => {
    setSearchInput(e.target.value)
  }

  const handleResetInput = () => {
    setSearchInput('')
  }

  const handleSelectDate = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleNoOfGuests = (e) => {
    setNoOfGuests(e.target.value)
  }

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests
      }
    })
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <Logo resetRouter={() => router.push('/')} />
      <SearchBar 
        searchInput={searchInput} 
        getUpdatedInput={getUpdatedInput}
        placeholder={placeholder}  
      />
      <UserBar />
      {searchInput && 
        <Calendar 
          resetInput={handleResetInput}
          selectDate={handleSelectDate}
          startDate={startDate}
          endDate={endDate}
          selectGuests={handleNoOfGuests}
          noOfGuests={noOfGuests}
          search={handleSearch}
        />
      }
    </header>
  )
}

export default Header
