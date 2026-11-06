import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("User is changed");
  }

  function mouseEnter(val){
    console.log(val);
  }

  function inputChanging(){
    console.log("User is typing");
  }
  return (
    <div>
      <h1>Hello,Abhishek</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>change user</button>

      <input onChange={inputChanging} type="text" placeholder="Enter Name"/>
       <input onChange={function(elem){
        mouseEnter(elem.target.value);
       }} type="text" placeholder="Enter"/>
    </div>
  )
}

export default App
