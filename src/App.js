import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import ThemeToggle from './components/ThemeToggle'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'

const App = () => {
  const [theme, setTheme] = useState(lightTheme)
  const [currentPage, setCurrentPage] = useState('Dashboard')

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.mode === 'light' ? darkTheme : lightTheme
    )
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <Dashboard />
      case 'Form':
        return <Form />
      default:
        return <Dashboard />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='app-container'>
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className='main-content'>
          <ThemeToggle toggleTheme={toggleTheme} />
          {renderPage()}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
