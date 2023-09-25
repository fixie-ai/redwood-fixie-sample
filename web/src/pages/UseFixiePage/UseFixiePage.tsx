import { useFixie } from 'fixie/web'

import { MetaTags } from '@redwoodjs/web'

const UseFixiePage = () => {
  /**
   * Here's a simple example of how to use the hook. Once you're comfortable with it, there are many more inputs and
   * outputs available to build a rich UI.
   */
  const { turns, sendMessage, input, setInput } = useFixie({
    agentId: 'nick/sidekick-help-scout',
  })

  function handleSubmit(event) {
    event.preventDefault()
    sendMessage()
    setInput('')
  }

  return (
    <>
      <MetaTags title="UseFixie" description="UseFixie page" />

      <h1>UseFixiePage</h1>
      <p>
        This page uses the <span className="code">useFixie</span> hook to access
        a conversation with a Fixie Sidekick.
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

export default UseFixiePage
