import { render, screen, within } from '@testing-library/react';
import UserList from 'UserList';

test('render one row per user', async () => {
  renderComponent();

  const rows = within(screen.getByTestId('users')).getAllByRole('row');
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    expect(name).toBeInTheDocument();
    const email = screen.getByRole('cell', { name: user.email });
    expect(email).toBeInTheDocument();
  }
});

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);

  return {
    users,
  };
}
