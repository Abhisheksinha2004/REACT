import React from 'react'
import Card from './components/Card'

const App=()=>{
  return (
    <div className="parent">
      
      <Card user="coding" age={18} img="https://plus.unsplash.com/premium_photo-1792971090361-0a7f931c69f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
     <Card user="Abhishek" age={21} img="https://plus.unsplash.com/premium_photo-1792937596453-4112315b8823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
    </div>
  )
}

export default App
