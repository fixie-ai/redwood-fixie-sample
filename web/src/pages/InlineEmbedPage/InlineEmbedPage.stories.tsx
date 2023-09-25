import type { Meta, StoryObj } from '@storybook/react'

import InlineEmbedPage from './InlineEmbedPage'

const meta: Meta<typeof InlineEmbedPage> = {
  component: InlineEmbedPage,
}

export default meta

type Story = StoryObj<typeof InlineEmbedPage>

export const Primary: Story = {}
