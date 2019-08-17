import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'

const ThrowingComponent = () => {
  throw new Error('its a broken component')
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error) {}
  render() {
    return this.props.children
  }
}

test('act', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
  const target = document.createElement('div')
  render(
    <ErrorBoundary>
      <ThrowingComponent />
    </ErrorBoundary>,
    target,
  )
})

// Passes, no unhandled promise rejection warning
test('no act', () => {
  const target = document.createElement('div')
  render(
    <ErrorBoundary>
      <ThrowingComponent />
    </ErrorBoundary>,
    target,
  )
})
