import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders', () => {
  render(<App />)
  expect(screen.getByText('Tabulator')).toBeInTheDocument()//header
  expect(screen.getByText('Uncontrolled Tabulator')).toBeInTheDocument()
  expect(screen.getByText('Controlled Tabulator')).toBeInTheDocument()
  expect(screen.getByText('Tab2 with single render')).toBeInTheDocument()
  expect(screen.getByText('© 2022 - zeonardo')).toBeInTheDocument()//footer
});
