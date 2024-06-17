import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Waiter from './pages/Waiter'
import Cook from './pages/Cook'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cook" element={<Cook/>} />
        <Route path="/waiter" element={<Waiter/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  )
}

export default App
