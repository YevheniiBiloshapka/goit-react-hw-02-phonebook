import { List, ListItem, Button } from './ContactList.styled';
import { VscTrash } from 'react-icons/vsc';

export const ContactList = ({ contacts, onDeleteContact }) => (
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
);
