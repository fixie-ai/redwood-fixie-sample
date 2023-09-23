import { InlineFixieEmbed } from 'fixie/web'

import { MetaTags } from '@redwoodjs/web'

const InlineEmbedPage = () => {
  return (
    <div className='page-root'>
      <MetaTags title="InlineEmbed" description="InlineEmbed page" />

      <h1>InlineEmbedPage</h1>
      <p>This page embeds the off-the-shelf Fixie Agent UI. It{"'"}s embedded via iframe.</p>

      <InlineFixieEmbed debug agentId='nick/sidekick-help-scout' className='inline-fixie-embed' />
    </div>
  )
}

export default InlineEmbedPage
