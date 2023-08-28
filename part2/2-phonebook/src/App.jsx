import { useState } from 'react'
import './App.css'

const Contact = (prop) => {
  return (
    <div>{prop.name}</div>
  )
}

function App() {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('')

  const addPhoneNumber = (event) => {
    event.preventDefault()

    // new contact object
    const newContact = {
      id: contacts.length + 1,
      name: newName
    }
    setContacts(contacts.concat(newContact))
    setNewName('')
  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
        <h2>Phonebook</h2>
        <form onSubmit={addPhoneNumber}>
          <div>
            name: <input placeholder='new contact..' value={newName} onChange={handleNoteChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      <h2>Numbers</h2>
      {
        contacts.map(contact => (
          <Contact key={contact.id} name={contact.name} />
        ) )
      }
    </div>
  )
}

export default App
