import { render } from '@redwoodjs/testing/web'

import InlineEmbedPage from './InlineEmbedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InlineEmbedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InlineEmbedPage />)
    }).not.toThrow()
  })
})
