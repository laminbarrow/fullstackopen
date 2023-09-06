import { useState } from "react";
import "./App.css";
import SearchFilter from "./components/SearchFilter";
import AddContactForm from "./components/AddContactForm";
import Contact from "./components/Contact";
import { useEffect } from "react";
import phonebookservice from "./services/phonebookservice";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    phonebookservice.getAll().then((response) => {
      setContacts(response);
    });
  }, []);

  const queriedContacts = searchQuery.length
    ? contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    : contacts;

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  /**
   * handleDeleteContact
   * delete contact handler
   * @param {*} contact 
   */
  const handleDeleteContact = (contact) => {
    if (window.confirm(`Delete ${contact.name} ?`)) {
      const contactID = contact.id
      phonebookservice
        .remove(contact.id)
        .then((response) => {
          // update contacts
          setContacts(contacts.filter(contact => contact.id !== contactID))
      });
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
      />

      <h3>Add a new contact </h3>
      <AddContactForm contacts={contacts} setContacts={setContacts} />

      <h2>Numbers</h2>
      {queriedContacts.map(contact => (
        <Contact
          key={contact.name}
          contact={contact}
          handleDeleteContact={() => handleDeleteContact(contact)}
        />
      ))
      }

    </div>
  );
}

export default App;
