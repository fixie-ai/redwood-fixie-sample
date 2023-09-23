import type { Meta, StoryObj } from '@storybook/react'

import UseSidekickPage from './UseSidekickPage'

const meta: Meta<typeof UseSidekickPage> = {
  component: UseSidekickPage,
}

export default meta

type Story = StoryObj<typeof UseSidekickPage>

export const Primary: Story = {}
