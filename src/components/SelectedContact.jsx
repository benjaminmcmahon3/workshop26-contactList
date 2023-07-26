import React from 'react'
import { useEffect, useState } from "react";
import App from '../App.jsx'

function SelectedContact ({selectedContactId, setSelectedContactId}) {

  const [contact, setContact] = useState(null)

  useEffect(()=>{
    async function fetchSelected (){
      try{
        console.log(`fetch the ID: ${selectedContactId}`)
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json()
        return setContact(result)

      }catch(error){
        console.error(error)
      }
    }
    fetchSelected()
  },[])

  console.log(contact)

  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.username}</p>
      <p>{contact.email}</p>
    </>
  )


}

export default SelectedContact