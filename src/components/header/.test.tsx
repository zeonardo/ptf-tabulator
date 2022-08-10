import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'

test('Header renders', () => {
  render(<Header>this is a test</Header>)
  expect(screen.getByText('this is a test')).toBeInTheDocument()
});
