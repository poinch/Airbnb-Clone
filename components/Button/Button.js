function Button({ buttonText}) {
  return (
    <button 
      className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
    >
      {buttonText}
    </button>
  )
}

export default Button
