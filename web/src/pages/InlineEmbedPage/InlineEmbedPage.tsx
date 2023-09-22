import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InlineEmbedPage = () => {
  return (
    <>
      <MetaTags title="InlineEmbed" description="InlineEmbed page" />

      <h1>InlineEmbedPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InlineEmbedPage/InlineEmbedPage.tsx</code>
      </p>
      <p>
        My default route is named <code>inlineEmbed</code>, link to me with `
        <Link to={routes.inlineEmbed()}>InlineEmbed</Link>`
      </p>
    </>
  )
}

export default InlineEmbedPage
