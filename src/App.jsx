import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import { useInsertionEffect } from 'react';
import SelectedContact from './components/SelectedContact';

function App() {

  const [selectedContactId, setSelectedContactId] = useState(null)
  console.log(`From App, ID selected: ${selectedContactId}`)
  return (

    <>
    {selectedContactId ? (
      <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>

  );
}

export default App