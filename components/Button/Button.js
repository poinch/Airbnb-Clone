function Button({ text, color}) {
  return (
    <button 
      className={`text-${color}-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150`}
    >
      {text}
    </button>
  )
}

export default Button
