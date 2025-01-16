import React, { useEffect, useState } from 'react'

export const Modal = ({handlemodal}) => {

    const [data, setData] = useState(null)

    const fetchData = async() => {
       try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const res = await response.json()
        setData(res)

       } catch (error) {
         console.log('there is an error')
       }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='layout'>
        <div className='modal'>
            {
               data ?
               <div>
                <span>{data.title}</span>
                <span>{data.body}</span>
               </div>
               :
            <p>Loading....</p>
        }
        <button onClick={handlemodal}>close modal</button>
        </div>
    </div>
  )
}
