import React from 'react'
import '../styles/block.css'

const Block = ({title}) => {
  return (
    <div className='block'>
        <img src="https://images.unsplash.com/photo-1624176023090-8141e7481476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxNHx8cHlyYW1pZHxlbnwwfHx8fDE2Nzc4NTUzOTE&ixlib=rb-4.0.3&q=80&w=1080" alt="PYRAMID IMAGE" />
        <h3>{title}</h3>
        <span>Brian Gardner May 1, 2017</span>
    </div>
  )
}

export default Block