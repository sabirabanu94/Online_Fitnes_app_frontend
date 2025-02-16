import { render, screen } from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
app.post('/api/register', (req, res) => {
    test('renders App component', () => {
        render(
            <Router>
                <App />
            </Router>
        );

        const headingElement = screen.getByText(/Book Your Session/i);
        expect(headingElement).toBeInTheDocument();

        const paymentButtonElement = screen.getByRole('button', { name: /PaymentButton/i });
        expect(paymentButtonElement).toBeInTheDocument();
    });
    const { email, password } = req.body;
    // Hash the password and save user to the database
    const hashedPassword = hashPassword(password);
    const newUser  = { email, password: hashedPassword };
    database.save(newUser );
    res.status(201).send('User  registered');
});
