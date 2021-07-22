import { List, Datagrid, TextField, EditButton, UrlField } from 'react-admin';

const LinksList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="tag" />
        <UrlField source="link" />
        <EditButton basePath="/links/admin" />
      </Datagrid>
    </List>
  );
};

export default LinksList;
