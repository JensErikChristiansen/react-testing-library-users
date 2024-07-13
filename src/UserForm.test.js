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
