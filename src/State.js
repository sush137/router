import React, { useState} from 'react'

export default function State() {
    const[count,setCount]=useState(0)
 const handleButton=()=>{
        setCount(count+1)
    }
{
const handleButton1=()=>{
        setCount(count-1)
    }
  return (
    <div><p>{count}</p>
    <button className='bg-amber-600' onClick={handleButton}>Increase</button>
    <button className='bg-red-700' onClick={handleButton1}>Decrease</button>
    </div>
  );
}
}
