import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button, { ButtonVariant } from './Button'

describe('Button Component', () => {
    test('renders with default props and text', () => {
        render(<Button>default</Button>)
        const button = screen.getByRole('button', { name: 'default' })

        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('btn btn-standard')
    })


    test('renders with specific variant', () => {
        render(<Button variant={ButtonVariant.Outlined}>Outlined</Button>);
        const button = screen.getByRole('button', { name: 'Outlined' });

        expect(button).toHaveClass('btn btn-outlined');
    });

    test('applies custom inline styles for bgcolor, color, and size', () => {
        render(
            <Button bgcolor="red" color="yellow" size={24}>Styled</Button>
        );
        const button = screen.getByRole('button', { name: 'Styled' });

        expect(button).toHaveStyle({
            'background-color': 'rgb(255, 0, 0)', // ✅ was: 'red'
            color: 'rgb(255, 255, 0)',
            'font-size': '24px',
        });
    });

    test('passes native HTML attributes like title and disabled', () => {
        render(<Button title="test-title" disabled>Disabled</Button>);
        const button = screen.getByRole('button', { name: 'Disabled' });

        expect(button).toHaveAttribute('title', 'test-title');
        expect(button).toBeDisabled();
    });
})