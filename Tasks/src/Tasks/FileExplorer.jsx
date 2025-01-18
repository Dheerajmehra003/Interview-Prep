import React, { useState } from 'react'
import explorer from '../Data/Data'
import VsSidebar from '../Component/VsSidebar'

const FileExplorer = () => {
    const [data, setData] = useState(explorer)
    console.log(data)
  return (
    <div>
      <VsSidebar data={data} />
    </div>
  )
}

export default FileExplorer