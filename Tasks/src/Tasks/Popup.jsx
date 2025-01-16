import React, { useState } from 'react'
import {Modal} from '../Component/Modal'

const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlemodal = () => {
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <div>
      <button onClick={handlemodal}>Click me</button>
      {
        isModalOpen ?
        <Modal handlemodal={handlemodal} />
        :
        <div> </div>
      }
    </div>
  )
}

export default Popup