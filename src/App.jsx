import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import { useInsertionEffect } from 'react';

function App() {

  const [selectedContactId, setSelectedContactId] = useState(null)

  return (

    <>
    {selectedContactId ? (
    <div>Selected Contact View</div>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>

    )}
    </>

  );
}

export default App