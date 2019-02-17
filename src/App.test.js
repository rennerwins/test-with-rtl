import React from 'react'
import { render, cleanup } from 'react-testing-library'
import App from './App'

afterEach(cleanup)

describe('getByText', () => {
  it('should render `Learn React`', () => {
    const { getByText } = render(<App />)
    getByText('Learn React')
  })

  it('should render new text with props change', () => {
    const { getByText, rerender } = render(<App />)
    getByText('Learn React')
    rerender(<App text="Testing React" />)
    getByText('Testing React')
  })
})
