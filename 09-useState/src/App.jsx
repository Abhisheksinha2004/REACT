import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  // let a=20;

  // function changeA(){
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }
  return (
    <div>
      <h1>Value of num is {num}</h1>
      {/* <button onClick={changeA}>Click</button> */}
      <button onClick={()=>{
        setNum(20);
      }}>Click</button>

      
    </div>
  )
}

export default App
