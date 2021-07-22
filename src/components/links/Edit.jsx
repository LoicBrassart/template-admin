import { Edit, SimpleForm, TextField, TextInput } from 'react-admin';

const LinksEdit = (props) => {
  return (
    <Edit title="Edition" {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextField source="tag" />
        <TextInput source="link" />
      </SimpleForm>
    </Edit>
  );
};

export default LinksEdit;
