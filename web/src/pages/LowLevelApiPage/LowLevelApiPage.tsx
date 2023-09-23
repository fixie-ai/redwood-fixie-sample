import { ConversationTurn } from 'fixie'
import { IsomorphicFixieClient } from 'fixie/web'

import { MetaTags } from '@redwoodjs/web'

const LowLevelApiPage = () => {
  const fixieClient = IsomorphicFixieClient.CreateWithoutApiKey()

  const [input, setInput] = React.useState('')
  const [agentReply, setAgentReply] = React.useState('')

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setInput('')
    const { response } = await fixieClient.startConversation(
      'nick/sidekick-help-scout',
      {},
      input
    )

    const reader = response.body.getReader()
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read()
      if (done) {
        break
      }
      const jsonlStream = new TextDecoder('utf-8').decode(value)
      const mostRecentJson = jsonlStream.trim().split('\n').at(-1)
      const mostRecentValue = JSON.parse(mostRecentJson) as ConversationTurn
      const textContent = mostRecentValue.messages
        .map((message) => (message.kind === 'text' ? message.content : ''))
        .join('')
      setAgentReply(textContent)
    }
  }

  return (
    <>
      <MetaTags title="LowLevelApi" description="LowLevelApi page" />

      <h1>LowLevelApiPage</h1>
      <p>
        This page uses the low-level Fixie API to send and receive messages to
        an agent. This API is the least opinionated, but also places higher
        burdens on the developer.
      </p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.currentTarget.value)}
        />
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
      <p className="message-content">Response: {agentReply}</p>
    </>
  )
}

export default LowLevelApiPage
