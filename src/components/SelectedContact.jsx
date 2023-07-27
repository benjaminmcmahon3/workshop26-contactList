import { useEffect, useState } from "react";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {

  const [contact, setContact] = useState(null)
  cosnt [error, setError] = useState(null)

  useEffect(()=>{
    async function fetchSelected (){
      try{

        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json()
        return setContact(result)

      }catch(error){

        setError(error);
      }
    }
    fetchSelected()
  },[])

  return (
    <>
      {contact && (
      <div>  
        <p>{contact.name}</p>
        <p>{contact.username}</p>
        <p>{contact.email}</p>
      </div>  
      )}
    </>
  )


}