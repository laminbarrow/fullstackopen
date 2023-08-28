import { useState } from 'react'
import './App.css'

const Contact = (prop) => {
  return (
    <div>{prop.name} - {prop.number}</div>
  )
}

function App() {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const queriedContacts = contacts.filter((contact) => {
    return contact.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
  }) 

  const addNewContact = (event) => {
    event.preventDefault()

    const newContact = {
      name: newName,
      number: newNumber
    }
    //make sure this contact was not added before
    if(contacts.find(({name}) => name === newName)){
      alert(`${newName} is already added to phonebook`);

      //exit the function
      return
    }
    // add new contact
    setContacts(contacts.concat(newContact))
    setSearchQuery('')
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
        <h2>Phonebook</h2>
        <div>
          filter show with 
          <input value={searchQuery} 
              onChange={handleSearchQuery} />
        </div>
        <h3>Add a new contact </h3>
        <form onSubmit={addNewContact}>
          <div>
            name: <input placeholder='new contact..' value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input placeholder='phone number' value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      <h2>Numbers</h2>
      {
        queriedContacts.map(contact => (
          <Contact key={contact.name} name={contact.name} number={contact.number} />
        ) )
      }
    </div>
  )
}

export default App

