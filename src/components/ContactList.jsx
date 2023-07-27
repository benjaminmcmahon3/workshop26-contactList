import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

export default function ContactList({setSelectedContactId}){
// declares contacts, which is set by the function setContacts, lastly useState initializes contacts to be set to dummyContacts
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(null)


  // useEffect will only run on the first render so long as a dependency is set, in this case an empty array
  useEffect(()=>{
    async function fetchContacts(){
      try{

        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
        const result = await response.json();
        setContacts(result)

      } catch(error){

        setError(error);

      }
    }
    fetchContacts()
  },[])

  // returns a table with a set header and col labels, then dynamically populates the content with the help of the ContactRow component
  return(
    <table>
      <thead>
        <tr>
          <th colSpan={3}>Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {error ? (
          <tr>(error)</tr>
        ) : (
          // maps over contacts, and for each "contact" it inserts a ContactRow component made up of 3 <td> elements within 1 <tr>
          contacts.map((contact) => {
            return(
              <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
            )
          })
        )}
      </tbody>
    </table>
  );

}