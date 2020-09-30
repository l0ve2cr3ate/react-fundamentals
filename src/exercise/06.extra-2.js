// 2. 💯 Validate lower-case
// Basic Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  const isValid = value === value.toLowerCase()

  const handleChange = event => {
    setValue(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const username = event.target.username.value

    setError(isValid ? null : 'Username must be lower case')
    if (!error) {
      onSubmitUsername(username)
    }

    console.log(username)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          name="username"
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
