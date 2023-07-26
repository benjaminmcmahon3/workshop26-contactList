import React from "react";
import ContactList from "./ContactList";

function ContactRow ({contact, setSelectedContactId}) {

  return (
    <tr onClick={() => {
          setSelectedContactId(contact.id);
          console.log(`From ContactRow, ID selected: ${contact.id}`)
        }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow