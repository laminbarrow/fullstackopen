import { useState } from 'react'
import './App.css'

const Contact = (prop) => {
  return (
    <div>{prop.name} - {prop.number}</div>
  )
}

function App() {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
        <h2>Phonebook</h2>
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
        contacts.map(contact => (
          <Contact key={contact.name} name={contact.name} number={contact.number} />
        ) )
      }
    </div>
  )
}

export default App

