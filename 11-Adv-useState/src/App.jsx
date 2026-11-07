import React, { useState } from 'react'


const App = () => {
  const [num, setNum] = useState({user:"Abhishek",age:21})

  const [num1, setNum1] = useState([10,20,30,40]);

  const [num2, setNum2] = useState(0);

  return (
    <div>
      <h1>{num.user},{num.age}</h1>

      <h1>{num1}</h1>

      <h1>{num2}</h1>


      <button onClick={()=>{
        console.log(num.user,num.age);
        const newNum={...num};
        newNum.user="Hero";
        setNum(newNum);
      }}> Click</button>


       <button onClick={()=>{
        console.log(num1);
        const newNum1=[...num1];
        newNum1.push(99)
       
        setNum1(newNum1);
      }}> Click1</button>


      <button onClick={()=>{
        console.log(num2);
      //  Batch update
        setNum2(prev=>(prev+1));
        setNum2(prev=>(prev+1));
        setNum2(prev=>(prev+1));


      }}> Click2</button>
      
    </div>
  )
}

export default App
