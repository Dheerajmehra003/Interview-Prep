import React, { useState } from 'react'

const VsSidebar = ({data}) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible:false,
        isFolder:null
    })


    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
          setExpand(true)
         setShowInput({
      visible: true,
      isFolder
    });
    }

    const onAddFolder = (e) => {
       if(e.keyCode === 13 && e.target.value) {
        //add logic
        setShowInput({...showInput, visible:false})
       }
    }


    if(data.isFolder) {
  return (
    <>
    <div className='folder' onClick={()=>setExpand(!expand)}>
        <span>📁{data.name}</span>
        <div>
            <button onClick={(e)=>handleNewFolder(e, false)}>file +</button>
            <button onClick={(e)=>handleNewFolder(e, true)}>folder +</button>
        </div>
    </div>
    <div style={{ display: expand ? "block" : 'none', paddingLeft:'30px'}}>

        {
           showInput.visible && (
            <div className='inputContainer'>
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input className='inputContainer__input'
                 type="text"
                 onKeyDown={onAddFolder}
                 autoFocus
                 onBlur={()=>setShowInput({...showInput,visible:false})} />
            </div>
           )
        }

       {
        data.items.map((item)=>{
            return <VsSidebar data={item} key={item.id} />
        })
       }
    </div>
    </>
  )
} else{
    return <span className='file'>📄{data.name}</span>
}
}

export default VsSidebar