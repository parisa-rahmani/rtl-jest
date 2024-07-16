import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { UserForm } from './UserForm';

describe('test user form component', () => {
  test('it shows tow inputs and one button', () => {
    render(<UserForm onSubmit={() => {}} />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test('it calls onSubmit callback when the form is submitted', async () => {
    const callback = jest.fn();

    render(<UserForm onSubmit={callback} />);

    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    await user.click(nameInput);
    await user.keyboard('parisa');

    await user.click(emailInput);
    await user.keyboard('parisa@gmail.com');

    const button = screen.getByRole('button');
    await user.click(button);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith({
      name: 'parisa',
      email: 'parisa@gmail.com',
    });
  });
});
