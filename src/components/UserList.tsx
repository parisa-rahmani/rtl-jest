import { User } from '../types';

type UserListProps = {
  list: User[];
};

const UserList = ({ list }: UserListProps) => {
  return (
    <div>
      {list.map(user => {
        return <li>{user.name}</li>;
      })}
    </div>
  );
};

export { UserList };
