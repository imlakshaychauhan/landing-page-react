import React from 'react'
import '../styles/content2.css'
import Card from './Card'

const Content2 = () => {
  return (
    <div className='container'>
        <h1 style={{ fontSize: "45px" }}>We build experience.</h1>
        <span style={{ fontSize: "18px" }}>A minimalist approach is the only way to design a website.</span>
        <hr />
        <div className='card-section' >
          <Card title="DESIGN" />
          <Card title="CONTENT" />
          <Card title="STRATEGY" />
        </div>
    </div>
  )
}

export default Content2