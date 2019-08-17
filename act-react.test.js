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
  act(() => {
    const target = document.createElement('div')
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
      target,
    )
  })
})
