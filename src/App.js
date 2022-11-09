import React from 'react'
import Home from './components/Home/Home'
import Context from './components/Store/Context'

function App() {
  return (
    <Context>
      <Home/>
    </Context>
  )
}

export default App
