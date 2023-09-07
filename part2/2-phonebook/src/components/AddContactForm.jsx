import { useState } from "react";
import phonebookservice from "../services/phonebookservice";

export default function AddContactForm({ contacts, setContacts, setNotification }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addNewContact = (event) => {
    event.preventDefault();

    const newContact = {
      name: newName,
      number: newNumber,
    };

    // Check if the contacts array has length greater than zero
    //make sure this contact was not added before
    const existingContact = contacts.find(
      (contact) => contact.name === newName
    );
    if (existingContact) {
      if (window
        .confirm(`${existingContact.name} is already added to phonebook, replace the old number with a new one?`)) {

          //update existing contact
          const updateContact = {...existingContact, number: newContact.number}
          
          phonebookservice
            .update(existingContact.id, updateContact)
            .then(returnedContact => {
              setContacts(contacts.map(contact => {
                return contact.id !== existingContact.id ? contact : returnedContact
              }))
            })
      }

      //exit the function
      return;
    }

    // create contact
    phonebookservice.create(newContact).then((response) => {
      // add new contact
      setContacts(contacts.concat(response));
      setNewName("");
      setNewNumber("");

      setNotification({
        message: `Added ${newContact.name}`,
        type: 'success'
      })

      // hide message after 5 seconds
      setTimeout(() => {
        setNotification({message: null, type: null})
      }, 5000);
      
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addNewContact}>
      <div>
        name:{" "}
        <input
          placeholder="new contact.."
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number:{" "}
        <input
          placeholder="phone number"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
