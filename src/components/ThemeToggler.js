import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggl extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div id="toggle-wrapper">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              id="toggle"
            />
            <label id="togg-label" for="toggle"></label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggl;