/** @jsx h */
import { render, h, Component } from 'preact'
import { act } from 'preact/test-utils'

const ThrowingComponent = () => {
  throw new Error('its a broken component')
}

class ErrorBoundary extends Component {
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
