import React, { useState } from 'react'
import ChildComponent from '../Component/ChildComponent'

const SimpleTask = () => {
    const [count, setCount] = useState(0)
    const [color, setcolor] = useState('blue')
    const [clicked, setClicked] = useState(false)

    const addColor = () => {
      setClicked(!clicked)
    }
  return (
    <>
    <div>counter : {count}</div>
    {/* <button onClick={()=>setCount(count + 1)}>increment</button>
    <button onClick={()=>setCount(count - 1)}>decrement</button>
    <button onClick={()=>setCount(0)}>reset</button> */}
    <ChildComponent manageCounter = {setCount} count={count} />

    <div style={{width:'300px', height:'100px', backgroundColor:`${color}`}}>
        {
           clicked ?
           <div>
              <input type="text" value={color} onChange={(e)=>setcolor(e.target.value)} />
              <button onClick={addColor}>changecolor</button>
           </div>
           :
        <button onClick={addColor}>changecolor</button>
        }
    </div>
    </>
  )
}

export default SimpleTask