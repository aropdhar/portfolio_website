import React from 'react'

const Heading = ({headtext,headclass}) => {
  return (
    <div>
      <h1 className={headclass}>{headtext}</h1>
    </div>
  )
}

export default Heading
