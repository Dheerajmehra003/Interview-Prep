import React from 'react'

const   ChildComponent = ({manageCounter,count}) => {
  return (
    <div>
         <button onClick={()=>manageCounter(count + 1)}>increment</button>
    <button onClick={()=>manageCounter(count - 1)}>decrement</button>
    <button onClick={()=>manageCounter(0)}>reset</button>
    </div>
  )
}

export default ChildComponent