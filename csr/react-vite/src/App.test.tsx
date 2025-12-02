import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
	it('should render the welcome text', () => {
		render(<App />);

		expect(screen.getByText('Hello Vite + React + KoliBri!')).toBeInTheDocument();
	});

	it('should render three KoliBri button components', () => {
		const { container } = render(<App />);

		const buttons = container.querySelectorAll('kol-button');
		expect(buttons).toHaveLength(3);
	});

	it('should render buttons with correct attributes', () => {
		const { container } = render(<App />);

		const primaryButton = container.querySelector('kol-button[_variant="primary"]');
		const secondaryButton = container.querySelector('kol-button[_variant="secondary"]');
		const dangerButton = container.querySelector('kol-button[_variant="danger"]');

		expect(primaryButton).toBeInTheDocument();
		expect(primaryButton).toHaveAttribute('_label', 'Primary');
		expect(secondaryButton).toBeInTheDocument();
		expect(secondaryButton).toHaveAttribute('_label', 'Secondary');
		expect(dangerButton).toBeInTheDocument();
		expect(dangerButton).toHaveAttribute('_label', 'Danger');
	});
});
