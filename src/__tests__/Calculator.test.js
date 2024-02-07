import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import chai from 'chai';
import Calculator from '../components/Calculator';


const expect = chai.expect;

describe('Calculator', function () {
  afterEach(cleanup); // Bereinigt das DOM nach jedem Test.

  it('handles addition correctly', function () {
    // Render Calculator-Komponente
    const { getByText, getByTestId } = render(<Calculator />);

    // Klicke auf die Tasten 2, +, 3 und =
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    // Überprüfe, ob die Eingabe und das Ergebnis korrekt sind
    const inputDisplay = getByTestId('input-display');
    const resultDisplay = getByTestId('result-display');
    expect(inputDisplay.textContent).to.equal('2+3');
    expect(resultDisplay.textContent).to.equal('5');
  });

  // Weitere Tests für andere Funktionen können hier hinzugefügt werden.
});
