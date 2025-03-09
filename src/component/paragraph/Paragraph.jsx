import React from 'react'

const Paragraph = ({paratext , paraclass}) => {
  return (
    <p className={paraclass}>{paratext}</p>
  )
}

export default Paragraph
