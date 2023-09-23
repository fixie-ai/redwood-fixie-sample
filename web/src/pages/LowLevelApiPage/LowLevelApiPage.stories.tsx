import type { Meta, StoryObj } from '@storybook/react'

import LowLevelApiPage from './LowLevelApiPage'

const meta: Meta<typeof LowLevelApiPage> = {
  component: LowLevelApiPage,
}

export default meta

type Story = StoryObj<typeof LowLevelApiPage>

export const Primary: Story = {}
