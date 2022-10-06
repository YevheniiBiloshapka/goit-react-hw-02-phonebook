import { Form, Button, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <Form action="">
      <Label htmlFor="">
        <p>Name</p>
        <Input type="text" placeholder="Enter name" />
      </Label>

      <Label htmlFor="">
        <p>Number</p>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="111-11-11"
        />
      </Label>
      <Button>Add contact</Button>
    </Form>
  );
};
