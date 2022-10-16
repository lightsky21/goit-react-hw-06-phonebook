import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormField, FormBtn } from './ContactsForm.styled';
import { FormLabelText } from 'components/Components.styled';
import { addContact } from '../../redux/ContactsListSlice';
import { getContacts } from '../../redux/Selector';
import { useSelector, useDispatch } from 'react-redux/es/exports';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <FormLabelText>Name</FormLabelText>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </FormField>
      <FormField>
        <FormLabelText>Number</FormLabelText>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </FormField>

      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
}

export default ContactsForm;
