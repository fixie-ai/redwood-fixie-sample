import type { Meta, StoryObj } from '@storybook/react'

import FloatingEmbedPage from './FloatingEmbedPage'

const meta: Meta<typeof FloatingEmbedPage> = {
  component: FloatingEmbedPage,
}

export default meta

type Story = StoryObj<typeof FloatingEmbedPage>

export const Primary: Story = {}
