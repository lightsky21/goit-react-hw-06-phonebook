import { ListItem, ListItemText, ListItemBtn } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/Selector';
import { onDeleteContact } from '../../redux/ContactsListSlice';
import { useDispatch } from 'react-redux';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const normalizedFilter = useSelector(getFilter).toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemText>
            {name} : {number}
          </ListItemText>
          <ListItemBtn
            type="button"
            onClick={() => dispatch(onDeleteContact(id))}
          >
            Delete
          </ListItemBtn>
        </ListItem>
      ))}
    </ul>
  );
}

export default ContactList;
