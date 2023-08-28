export default function Contacts(props){
   return(
        props.queriedContacts.map(contact => (
          <div key={contact.name}>{contact.name} - {contact.number}</div>
        ) )
    )
}