import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme}>
      Switch to {theme.mode === 'dark' ? 'light' : 'dark'} mode
    </button>
  )
}

export default ThemeToggle
