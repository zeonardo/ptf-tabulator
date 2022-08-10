import React from 'react'
import { render, screen } from '@testing-library/react'
import Logo from './index'

test('Logo renders', () => {
  render(<Logo/>)
  expect(screen.getByAltText('Tabulator')).toBeInTheDocument()
});
