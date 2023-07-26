import React from "react";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";

function SelectedContact ({selectedContactId, setSelectedContactId}) {

  const [contact, setContact] = useState(null)

  useEffect(()=>{
    async function fetchSelected (){
      try{

        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json()
        setContact(result)
        console.log(contact)

      }catch(error){
        console.error(error)
      }
    }
    fetchSelected()
  },[])
  return (
    <>
      {console.log(contact)}
    </>
  )


}

export default SelectedContact