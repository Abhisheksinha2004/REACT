import React from 'react'
import card from './components/card'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Abhishek</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptas?</p>
      </div>
      {card()}
    </div>
  )
}

export default App
