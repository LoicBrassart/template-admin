import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="lastname" />
        <TextField source="firstname" />
        <TextField source="email" />
        <DeleteButton source="auth/signup" />
      </Datagrid>
    </List>
  );
};

export default UserList;
