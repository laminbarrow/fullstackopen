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

  const addNewContact = (event) => {
    event.preventDefault()

    // add new contact
    setContacts(contacts.concat(newName))
    setNewName('')
  }

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNewContact}>
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
          <Contact key={contact} name={contact} />
        ) )
      }
    </div>
  )
}

export default App
