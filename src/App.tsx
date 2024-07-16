import { useState } from 'react';
import './App.css';
import { UserForm, UserList } from './components';
import { User } from './types';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <>
      <UserForm onSubmit={onUserAdd} />
      <UserList list={users} />
    </>
  );
}

export default App;
