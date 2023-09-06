import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'
import AddContactForm from './components/AddContactForm'
import Contacts from './components/Contacts'
import { useEffect } from 'react';
import phonebookservice from './services/phonebookservice'
function App() {
  const [contacts, setContacts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    phonebookservice
      .getAll()
      .then(response => {
        setContacts(response)
      })
  },[])

  const queriedContacts = searchQuery.length ? contacts.filter((contact) => {
      return contact.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    
  }) : contacts

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
        <h2>Phonebook</h2>
        <SearchFilter searchQuery={searchQuery} handleSearchQuery={handleSearchQuery} />

        <h3>Add a new contact </h3>
        <AddContactForm contacts={contacts} setContacts={setContacts} />
        
        <h2>Numbers</h2>
        <Contacts queriedContacts={queriedContacts} />
    </div>
  )
}

export default App

