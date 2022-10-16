import { Container } from 'components/Components.styled'

import ContactsForm from "./ContactsForm";
import Filter from "./Filter";
import ContactList from "./ContactList";



export function App() {
    return (
      (<Container>
  <h1>Phonebook</h1>
        <ContactsForm  />

  <h2>Contacts</h2>
        <Filter  />
        <ContactList  />
</Container>)
    )
  
};
