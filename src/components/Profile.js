import React from 'react'
import {useSelector} from 'react-redux'


function Profile () {

    const{name,age,status} = useSelector((state)=>{
        console.log(state)
        return state

    })
    console.log("Profile")
  return (
    <div>
        <h2>I am {name}</h2>
        <h2>my age is {age}</h2>
        <h2>my status is {status}</h2>
    </div>
  )
}

export default Profile