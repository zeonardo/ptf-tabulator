import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Tab from './index'
import Tab2 from './tab2'

test('Tab renders', () => {
  render(
    <Tab className="uncontrolled" initialActive={0}>
      <Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
      <Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
      <Tab.Pane title="Third Pane">Third Pane Body</Tab.Pane>
    </Tab>
  )
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
});

test('Tab renders with custom initialActive', () => {
  render(
    <Tab initialActive={2}>
      <Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
      <Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
      <Tab.Pane title="Third Pane">Third Pane Body</Tab.Pane>
    </Tab>
  )
  expect(screen.getByText('Third Pane Body')).toBeInTheDocument()
});

test('Tab changes tabs', () => {
  render(
    <Tab initialActive={0}>
      <Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
      <Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
      <Tab.Pane title="Third Pane">Third Pane Body</Tab.Pane>
    </Tab>
  )
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  const tab2 = screen.getByText('Third Pane')
  fireEvent.click(tab2)
  expect(screen.getByText('Third Pane Body')).toBeInTheDocument()
});

test('Tab2 changes tabs and keeps them in the DOM', () => {
  render(
    <Tab2 initialActive={0}>
      <Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
      <Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
      <Tab.Pane title="Third Pane">Third Pane Body</Tab.Pane>
    </Tab2>
  )

  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  expect(screen.queryByText('Second Pane Body')).not.toBeInTheDocument()
  expect(screen.queryByText('Third Pane Body')).not.toBeInTheDocument()

  const tab1 = screen.getByText('Second Pane')
  fireEvent.click(tab1)
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  expect(screen.getByText('Second Pane Body')).toBeInTheDocument()
  expect(screen.queryByText('Third Pane Body')).not.toBeInTheDocument()

  const tab2 = screen.getByText('Third Pane')
  fireEvent.click(tab2)
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  expect(screen.getByText('Second Pane Body')).toBeInTheDocument()
  expect(screen.getByText('Third Pane Body')).toBeInTheDocument()
});
