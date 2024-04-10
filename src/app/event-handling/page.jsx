'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div>
        <h1>Event Handling</h1>
        <hr />

        <button className='btn btn-primary' onClick={ () =>  { alert('Huraayyyyy....!') } }>Click Me!</button>
    </div>
  )
}

export default EventHandling;