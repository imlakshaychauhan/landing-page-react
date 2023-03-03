import React from 'react'
import '../styles/content4.css'
import Block from './Block'

const Content4 = () => {
  return (
    <div className='content4'>
        <h1 style={{ fontSize: "45px" }}>We build experience.</h1>
        <span style={{ fontSize: "18px" }}>A minimalist approach is the only way to design a website.</span>
        <hr />
        <div className='section-box'>
            <Block title="OVERCOMING CREATIVE BLOCK" />
            <Block title="WHY COMMUNICATION IS KEY" />
        </div>
        <div className='section-box'>
            <Block title="THE PATH OF LEAST RESISTANCE" />
            <Block title="HOW TO REACH NEW HEIGHTS" />
        </div>
    </div>
)
}

export default Content4