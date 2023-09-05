import { useState } from "react"
import axios from "axios"

export default function AddContactForm({contacts, setContacts}) {
    
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

        axios
          .post('http://localhost:3002/persons', newContact)
          .then(response => {
            
             // add new contact
            setContacts(contacts.concat(response.data))
            setNewName('')
            setNewNumber('')
          })
       
      }
    
      const handleNameChange = (event) => {
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
      }

    return (
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
    )
}