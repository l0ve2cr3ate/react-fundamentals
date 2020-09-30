// 3. 💯 Control the input value
// Basic Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleChange = event => {
    setUsername(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.username.value

    onSubmitUsername(name)

    console.log(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          value={username.toLowerCase()}
          type="text"
          id="username"
          name="username"
        />
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
