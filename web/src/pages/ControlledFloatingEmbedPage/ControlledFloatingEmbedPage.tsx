import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ControlledFloatingEmbedPage = () => {
  return (
    <>
      <MetaTags
        title="ControlledFloatingEmbed"
        description="ControlledFloatingEmbed page"
      />

      <h1>ControlledFloatingEmbedPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/ControlledFloatingEmbedPage/ControlledFloatingEmbedPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>controlledFloatingEmbed</code>, link to
        me with `
        <Link to={routes.controlledFloatingEmbed()}>
          ControlledFloatingEmbed
        </Link>
        `
      </p>
    </>
  )
}

export default ControlledFloatingEmbedPage
