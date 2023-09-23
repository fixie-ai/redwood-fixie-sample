import { MetaTags } from '@redwoodjs/web'
import { ControlledFloatingFixieEmbed } from 'fixie/web'
import { useState } from 'react'

const ControlledFloatingEmbedPage = () => {
  const [visible, setVisible] = useState(false)

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    width: '80%',
    height: '80%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  }

  return (
    <>
      <MetaTags
        title="ControlledFloatingEmbed"
        description="ControlledFloatingEmbed page"
      />

      <h1>ControlledFloatingEmbedPage</h1>
      <p>This page embeds the off-the-shelf Fixie Agent UI. Open and close it via the <span className='code'>visible</span> prop.</p>

      <button onClick={() => setVisible(prev => !prev)}>{visible ? 'Hide' : 'Show'}</button>

      <ControlledFloatingFixieEmbed visible={visible} debug agentId='nick/sidekick-help-scout' style={style} />
    </>
  )
}

export default ControlledFloatingEmbedPage
