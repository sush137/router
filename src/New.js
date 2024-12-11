import React, {useState} from 'react'

export default function New() {
// const Header = () => {
const[color,setColor]= useState("blue")
const handleButton=()=>{
    setColor("pink")
}
    

return (
    <div><p>{color}</p>
    <button onClick={handleButton}>click</button>
    </div>
)
}
