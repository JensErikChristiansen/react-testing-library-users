import { useState } from 'react';

export default function UserForm({ onUserAdd }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onUserAdd({
      name,
      email,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <button type="submit">Add User</button>
    </form>
  );
}
