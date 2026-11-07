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

  const pageScrolling=(elem)=>{
    console.log("page scrolling....",elem);
    if(elem>0)
    {
      console.log("forward scrolling");
    }
    else{
      console.log("backward scrolling");
    }
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <h1>Hello,Abhishek</h1>

      <button onMouseEnter={mouseEnter} onClick={btnClicked}>change user</button>

      <input onChange={inputChanging} type="text" placeholder="Enter Name"/>
      {/* /* passing function call */ }
       <input onChange={function(elem){
        mouseEnter(elem.target.value);
       }} type="text" placeholder="Enter"/>

       <div className="page1"></div>
       <div className="page2"></div>
       <div className="page3"></div>
    </div>
  )
}

export default App
