import '@testing-library/jest-dom'
import React, { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tab, { Tab2 } from 'ztabs'

const TabController: React.FC = () => {
  const [active, setActive] = useState(1)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActive(index)
  }

  return (
    <div data-tab={active}>
      <Tab className='controlled' active={active} onActiveChange={onClick}>
        <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
        <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
        <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
      </Tab>
    </div>
  )
}

test('Tab renders', () => {
  render(
    <Tab initialActive={0}>
      <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
      <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
      <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
    </Tab>,
  )
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
})

test('Tab renders with custom initialActive', () => {
  render(
    <Tab initialActive={2}>
      <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
      <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
      <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
    </Tab>,
  )
  expect(screen.getByText('Third Pane Body')).toBeInTheDocument()
})

test('Tab changes tabs', () => {
  render(
    <Tab initialActive={0}>
      <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
      <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
      <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
    </Tab>,
  )
  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  const tab2 = screen.getByText('Third Pane')
  fireEvent.click(tab2)
  expect(screen.getByText('Third Pane Body')).toBeInTheDocument()
})

test('Tab can be controlled externally', () => {
  render(<TabController />)

  expect(screen.getByText('Second Pane Body')).toBeInTheDocument()
  expect(screen.queryByText('First Pane Body')).not.toBeInTheDocument()

  const tab0 = screen.getByText('First Pane')
  fireEvent.click(tab0)

  expect(screen.getByText('First Pane Body')).toBeInTheDocument()
  expect(screen.queryByText('Second Pane Body')).not.toBeInTheDocument()
})

test('Tab2 changes tabs and keeps them in the DOM', () => {
  render(
    <Tab2 initialActive={0}>
      <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
      <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
      <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
    </Tab2>,
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
})
