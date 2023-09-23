import { render } from '@redwoodjs/testing/web'

import FloatingEmbedPage from './FloatingEmbedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FloatingEmbedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FloatingEmbedPage />)
    }).not.toThrow()
  })
})
