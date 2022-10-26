import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from'./index.js';

describe('The Header Component', () => {
  it('renders h1', () => {
    render(<Header RESTy="Test"/>);

    let h1 = screen.getByTestId('header-h1');
    expect(h1).toHaveTextContent('RESTy');

    let anotherH1Example = screen.getByText('RESTy');
    expect(anotherH1Example).toBeTruthy();
    expect(anotherH1Example).toBeInTheDocument();
  });
});