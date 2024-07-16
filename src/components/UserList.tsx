import { User } from '../types';

type UserListProps = {
  list: User[];
};

const UserList = ({ list }: UserListProps) => {
  return (
    <ul>
      {list.map((user, idx) => {
        return (
          <li key={user.email + idx}>
            <div className="flex gutter-1">
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export { UserList };
