import { List, ListItem, Button, Results, Error } from './ContactList.styled';
import { VscTrash } from 'react-icons/vsc';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return Object.keys(contacts).length === 0 ? (
    <Error>❌ Your query did not find anything</Error>
  ) : (
    <>
      <Results>Contact list:</Results>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Button onClick={() => onDeleteContact(id)}>
              <VscTrash />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
