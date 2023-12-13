import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
      <p>{length} List {length === 1 ? "item" : "items"}</p>
      <br></br>
      <p>&copy; CG-VAK Software & Exports Ltd. {year.getFullYear()}</p></footer>
  )
}

export default Footer