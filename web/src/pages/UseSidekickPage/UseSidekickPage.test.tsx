import { render } from '@redwoodjs/testing/web'

import UseSidekickPage from './UseSidekickPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UseSidekickPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UseSidekickPage />)
    }).not.toThrow()
  })
})
