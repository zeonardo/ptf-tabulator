import React from 'react'
import { render, screen } from '@testing-library/react'
import Content from './index'

test('Content renders', () => {
  render(<Content>this is a test</Content>)
  expect(screen.getByText('this is a test')).toBeInTheDocument()
});
