import { render } from '@redwoodjs/testing/web'

import LowLevelApiPage from './LowLevelApiPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LowLevelApiPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LowLevelApiPage />)
    }).not.toThrow()
  })
})
