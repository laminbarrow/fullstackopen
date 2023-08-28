import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'
import AddContactForm from './components/AddContactForm'
import Contacts from './components/Contacts'

function App() {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [searchQuery, setSearchQuery] = useState('')

  const queriedContacts = contacts.filter((contact) => {
    return contact.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
  }) 

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

