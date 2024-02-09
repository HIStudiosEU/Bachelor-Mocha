// TicTacToe.mocha.test.js
import React from 'react';
import { expect } from 'chai';
import { render, fireEvent, screen } from '@testing-library/react';
import TicTacToe from '../components/TicTacToe'; // Stellen Sie sicher, dass der Pfad korrekt ist

describe('TicTacToe Component', () => {
  it('allows player X to start a game by clicking the first square', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');
    fireEvent.click(squares[0]); // Klicken Sie auf das erste Spielfeld
    expect(squares[0].textContent).to.equal('X'); // Überprüfen Sie, ob das erste Feld ein 'X' enthält
  });  
});
