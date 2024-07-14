import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { logRoles } from '@testing-library/react';

test('can receive a new user and show it on a list', async () => {
  const user = userEvent.setup();
  render(<App />);

  const nameInput = byName('textbox', /name/i);
  await user.type(nameInput, 'jane');
  const emailInput = byName('textbox', /email/i);
  await user.type(emailInput, 'jane@jane.com');
  const button = screen.getByRole('button');
  await user.click(button);

  const name = byName('cell', /jane/i);
  const email = byName('cell', /jane@jane.com/i);
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

function byName(role, name) {
  return screen.getByRole(role, { name: getName(name) });
}

function getName(name) {
  if (name instanceof RegExp) {
    return new RegExp(`^${name.source}$`, name.flags);
  }

  return name;
}
