import { useState } from "react";
import phonebookservice from "../services/phonebookservice";

export default function AddContactForm({ contacts, setContacts }) {
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
      alert(`${newName} is already added to phonebook`);

      //exit the function
      return;
    }

    phonebookservice.create(newContact).then((response) => {
      // add new contact
      setContacts(contacts.concat(response));
      setNewName("");
      setNewNumber("");
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
