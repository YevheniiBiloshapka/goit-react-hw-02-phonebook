import { Button, Input, Label, FormBox, Error } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

let schema = Yup.object().shape({
  name: Yup.string().min(4).max(32).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormBox action="">
        <Label htmlFor="name">
          <p>Name</p>
          <Input name="name" type="text" placeholder="Enter name" />
          <ErrorMessage name="name">
            {() => <Error>Name must be at least 4 characters</Error>}
          </ErrorMessage>
        </Label>

        <Label htmlFor="number">
          <p>Number</p>
          <Input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="111-11-11"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};
