import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from 'UserForm';

test('shows two inputs and a button', async () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('calls onUserAdd when the form is submitted', async () => {
  const user = userEvent.setup();
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', { name: /name/i });
  await user.type(nameInput, 'jane');
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  await user.type(emailInput, 'jane@jane.com');
  const button = screen.getByRole('button');
  await user.click(button);

  expect(mock).toHaveBeenCalledWith({
    name: 'jane',
    email: 'jane@jane.com',
  });
});
