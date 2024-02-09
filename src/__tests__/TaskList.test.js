import React from 'react';
import { expect } from 'chai';
import { render, screen, fireEvent } from '@testing-library/react'; // Fügen Sie fireEvent zum Import hinzu
import TaskList from '../components/TaskList';

describe('TaskList', () => {
  it('rendert korrekt mit leeren Aufgaben', () => {
    render(<TaskList />);
    expect(screen.getByText(/ToDo-List/i)).to.exist;
    expect(screen.queryByText(/Aufgabe hinzufügen/)).to.not.exist; // Beispiel, wie man überprüfen kann, dass etwas NICHT vorhanden ist
  });
});

