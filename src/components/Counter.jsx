import React from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(1);
  
  const handleAddCount = () =>{
    setCount(count + 1);
  }
  const handleDescCount = () =>{
    setCount(count-1);
  }

  return (
    <div className='flex items-center justify-center text-2xl'>
       Quantity
       <div className='ml-5 shadow-md flex '>
        <div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md'
        onClick={handleDescCount}>-</div>
        <div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]'>{count}</div>
        <div onClick={handleAddCount} className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md'>+</div>
       </div>
    </div>
  )
}

export default Counter