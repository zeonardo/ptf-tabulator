import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import TabController from './index'

test('TabController renders', () => {
  render(<TabController/>)
  expect(screen.getByText('First Pane Controlled')).toBeInTheDocument()
});

test('TabController changes tab', () => {
  render(<TabController data-testid="controller"/>)
  expect(screen.getByTestId('controller')).toHaveAttribute('data-tab', '1')
  const tab0 = screen.getByText('First Pane Controlled')
  fireEvent.click(tab0)
  expect(screen.getByTestId('controller')).toHaveAttribute('data-tab', '0')
});
