import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const TextsEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tag" />
        <TextInput source="txt" />
      </SimpleForm>
    </Edit>
  );
};

export default TextsEdit;
