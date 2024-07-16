import { render, screen, within } from '@testing-library/react';
import { User } from '../types';
import { UserList } from './UserList';

describe('user list component', () => {
  const renderComponent = () => {
    const usersList: User[] = [
      { name: 'pari', email: 'pari@pari.com' },
      { name: 'mari', email: 'mari@mari.com' },
    ];
    render(<UserList list={usersList} />);

    return { usersList };
  };

  test('render one list item per user', () => {
    renderComponent();
    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
  });

  test('render the name and email for each user', () => {
    const { usersList } = renderComponent();
    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((item, idx) => {
      const { getByText } = within(item);
      const { name, email } = usersList[idx];

      expect(getByText(name)).toBeInTheDocument();
      expect(getByText(email)).toBeInTheDocument();
    });
  });
});
