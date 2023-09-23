import { FloatingFixieEmbed } from 'fixie/web'

import { MetaTags } from '@redwoodjs/web'

const FloatingEmbedPage = () => {
  return (
    <>
      <MetaTags title="FloatingEmbed" description="FloatingEmbed page" />

      <h1>FloatingEmbedPage</h1>
      <p>
        This page embeds the off-the-shelf Fixie Agent UI. Open and close it via
        the launcher in the lower-right corner of the screen.
      </p>

      <FloatingFixieEmbed debug agentId="nick/sidekick-help-scout" />
    </>
  )
}

export default FloatingEmbedPage
