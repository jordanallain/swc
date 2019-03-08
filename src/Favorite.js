import React, { useState } from 'react'

const Favorite = function () {
  const [character, changeCharacter] = useState('')

  return (
    <React.Fragment>
      <h2>Your favorite character is {character}!</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        changeCharacter(event.target[0].value)
        event.target[0].value = ''
      }}>
        <input type='text' placeholder=''></input>
        <input type='submit'></input>
      </form>
    </React.Fragment>
  )
}

export default Favorite
