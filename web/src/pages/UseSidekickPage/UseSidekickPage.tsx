import { useSidekick } from 'fixie/web'

import { MetaTags } from '@redwoodjs/web'

const UseSidekickPage = () => {
  const { turns, sendMessage, input, setInput } = useSidekick({
    agentId: 'nick/sidekick-help-scout',
  })

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
    setInput('')
  }

  return (
    <>
      <MetaTags title="UseSidekick" description="UseSidekick page" />

      <h1>UseSidekickPage</h1>
      <p>
        This page uses the <span className="code">useSidekick</span> hook to
        access a conversation with a Fixie Sidekick.
      </p>

      <div className="conversation">
        {turns.map((turn, index) => (
          <div key={index} className="turn">
            {turn.messages.map((message, index) =>
              message.kind === 'text' ? (
                <div key={`message-${index}`}>
                  <span className="role">{turn.role}: </span>
                  <span className="message-content">{message.content}</span>
                </div>
              ) : null
            )}
          </div>
        ))}
      </div>

      <div>
        <form onSubmit={handleSubmit} className="send-message-form">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default UseSidekickPage
