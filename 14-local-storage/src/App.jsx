import React from 'react'

const App = () => {

  localStorage.setItem("user","Abhishek")
  

  localStorage.setItem("age","18")

   const user =localStorage.getItem("user");
  const age =localStorage.getItem("age");
  console.log(user,age);

//for removing
localStorage.removeItem("user")

const user1={
  username:"Abhishek",
  age:21,
  city:"Ranchi"
}

localStorage.setItem("user1",JSON.stringify(user1))

const user2=JSON.parse(localStorage.getItem("user1"))
console.log(user2)

  return (
    <div>
      
    </div>
  )
}

export default App
