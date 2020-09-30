// Basic Forms Extra Credit
//1. 💯 using refs

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 get the value from the username input using a ref
  const inputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()

    const username = inputRef?.current?.value
    console.log(username)
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} type="text" id="username" name="username" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
