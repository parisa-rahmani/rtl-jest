import { FormEvent, useState } from 'react';
import { User } from '../types';

type UserFormProps = {
  onSubmit: (user: User) => void;
};
function UserForm({ onSubmit }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if (!name || !email) {
    //   setErrorMessage('name or email is empty');
    //   return;
    // }
    onSubmit({ name, email });
  };
  return (
    <>
      {/* <p>{errorMessage}</p> */}
      <form onSubmit={handleSubmit}>
        <div className="gutter-1 col-direction">
          <div className="gutter-1">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="gutter-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <button>add user</button>
        </div>
      </form>
    </>
  );
}

export { UserForm };
