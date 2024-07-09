import React, { useState } from 'react'

function Counter() {
  const [Count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(Count+1)}}>count is {Count}</button>
    </div>
  )
}

export default Counter
