import { useState } from "react";
import "./App.css";
import SearchFilter from "./components/SearchFilter";
import AddContactForm from "./components/AddContactForm";
import Contact from "./components/Contact";
import { useEffect } from "react";
import phonebookservice from "./services/phonebookservice";
import Notification from "./components/Notification";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState({message: null, type:null})

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
      }).catch(error => {
        setNotification({
          message: `${contact.name} has already been deleted from server`,
          type: 'error'
        })
  
        // hide message after 5 seconds
        setTimeout(() => {
          setNotification({message: null, type: null})
        }, 5000);
        
        setContacts(contacts.filter(contact => contact.id !== contactID))
      });
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type}/>
      <SearchFilter
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
      />

      <h3>Add a new contact </h3>
      <AddContactForm 
        contacts={contacts} 
        setContacts={setContacts} 
        setNotification={setNotification} />

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
