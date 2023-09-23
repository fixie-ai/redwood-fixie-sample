import type { Meta, StoryObj } from '@storybook/react'

import ControlledFloatingEmbedPage from './ControlledFloatingEmbedPage'

const meta: Meta<typeof ControlledFloatingEmbedPage> = {
  component: ControlledFloatingEmbedPage,
}

export default meta

type Story = StoryObj<typeof ControlledFloatingEmbedPage>

export const Primary: Story = {}
