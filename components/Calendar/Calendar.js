import { DateRangePicker } from 'react-date-range';
import { UsersIcon } from '@heroicons/react/solid';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Calendar({ 
  resetInput, selectDate, startDate, endDate, selectGuests, noOfGuests, search 
}) {

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  return (
    <div className='flex flex-col col-span-3 mx-auto mt-2'>
      <DateRangePicker 
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={['#FD5B61']}
        onChange={selectDate}
      />
      <div className='flex items-center border-b mb-3'>
        <h2 className='text-2xl flex-grow font-semibold'>
          Number of Guests
        </h2>
        <UsersIcon className='h-5 w-5' />
        <input 
          type='number'
          min={1}
          className='w-12 pl-2 text-lg outline-none text-red-400'
          value={noOfGuests}
          onChange={selectGuests}
        />
      </div>
      <div className='flex'>
        <button 
          className='flex-grow text-gray-500'
          onClick={resetInput}
        >
          Cancel
        </button>
        <button 
          className='flex-grow text-red-400'
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Calendar
