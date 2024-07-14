import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from 'UserForm';

test('shows two inputs and a button', async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('calls onUserAdd when the form is submitted', async () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  await user.type(nameInput, 'jane');
  await user.type(emailInput, 'jane@jane.com');

  const button = screen.getByRole('button');
  await user.click(button);

  expect(mock).toHaveBeenCalledWith({
    name: 'jane',
    email: 'jane@jane.com',
  });
});
