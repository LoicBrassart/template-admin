import { List, Datagrid, TextField, EditButton } from 'react-admin';

const TextsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tag" />
        <TextField source="txt" />
        <EditButton basePath="/texts/admin" />
      </Datagrid>
    </List>
  );
};

export default TextsList;
