//@ts-check
import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from '../about'
import Clock from '../clock'

const App = () => (
  <div className="min-w-screen min-h-screen">
    <header className="flex h-12 bg-gray-100 justify-around border-b-2 border-blue-200">
      <Link className="flex-1 text-blue-500 hover:text-blue-800 text-center self-center" to="/">Clock Diagram</Link>
      <Link className="flex-1 text-blue-500 hover:text-blue-800 text-center self-center" to="/about-us">About</Link>
    </header>

    <main className="mt-4">
      <Route exact path="/" component={Clock} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
