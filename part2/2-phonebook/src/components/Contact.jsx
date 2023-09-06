export default function Contact({contact, handleDeleteContact}){
   return(
        <div>
            {contact.name} - {contact.number}
            <button type="button" onClick={handleDeleteContact}>delete</button>
        </div>
    )
}