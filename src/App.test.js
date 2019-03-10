import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import App from './App'

afterEach(cleanup)

describe('fireEvent', () => {
  it('should find value in input field', () => {
    const { getByLabelText } = render(<App />)
    const input = getByLabelText('name-field')
    fireEvent.change(input, { target: { value: 'Win' } })
    expect(input.value).toEqual('Win')
  })

  it('should change message to `Win`', () => {
    const { getByText, getByLabelText } = render(<App />)
    const input = getByLabelText('name-field')
    const button = getByText('Change Name')
    fireEvent.change(input, { target: { value: 'Win' } })
    fireEvent.click(button)
    getByText('Hello, Win!')
  })

  it('should clear text input value when click button', () => {
    const { getByText, getByLabelText } = render(<App />)
    const input = getByLabelText('name-field')
    const button = getByText('Change Name')
    fireEvent.change(input, { target: { value: 'Win' } })
    fireEvent.click(button)
    expect(input.value).toEqual('')
  })
})
