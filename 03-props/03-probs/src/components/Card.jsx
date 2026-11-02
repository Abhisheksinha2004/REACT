import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div className="Card">
            <img src={props.img} alt="profile"/>
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>view profile</button>
          </div>
  )
}

export default Card
