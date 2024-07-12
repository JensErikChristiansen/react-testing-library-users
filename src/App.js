import { useState } from 'react';
import UserForm from 'UserForm';
import UserList from 'UserList';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div>
      <UserForm onUserAdd={addUser} />

      <hr />

      <UserList users={users} />
    </div>
  );
}

export default App;
