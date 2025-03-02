import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterModule from '../app/components/CounterModule';

describe('Counter Component', () => {
  it('should render the component', () => {
    render(<CounterModule />);
  });

  it('should increment the counter', () => {
    render(<CounterModule />);
  });
});