import { render } from '@redwoodjs/testing/web'

import ControlledFloatingEmbedPage from './ControlledFloatingEmbedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ControlledFloatingEmbedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ControlledFloatingEmbedPage />)
    }).not.toThrow()
  })
})
