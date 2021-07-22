import { List, Datagrid, TextField, EditButton, UrlField } from 'react-admin';

const TextsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tag" />
        <UrlField source="src" />
        <TextField source="alt" />
        <EditButton basePath="/images/admin" />
      </Datagrid>
    </List>
  );
};

export default TextsList;
