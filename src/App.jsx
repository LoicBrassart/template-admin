import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import textsList from './components/texts/List';
import TextsEdit from './components/texts/Edit';
import ImagesList from './components/images/List';
import ImagesEdit from './components/images/Edit';
import LinksEdit from './components/links/Edit';
import LinksList from './components/links/List';
import UserList from './components/user/List';
import UserPost from './components/user/Post';

function App() {
  return (
    <div className="App">
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="texts/admin" list={textsList} edit={TextsEdit} />
        <Resource name="images/admin" list={ImagesList} edit={ImagesEdit} />
        <Resource name="links/admin" list={LinksList} edit={LinksEdit} />
        <Resource name="auth/signup" list={UserList} create={UserPost} />
      </Admin>
    </div>
  );
}

export default App;
