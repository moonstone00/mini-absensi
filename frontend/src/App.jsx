import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Register from './components/Register'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home title={'Home Page'} />} />
          <Route path='/login' element={<Login title={'LOGIN PAGE'} description={'ABSENSI APPS'} />} />
          <Route path='/register' element={<Register title={'Register PAGE'} description={'ABSENSI APPS'} />} />
          <Route path='/dashboard' element={<Dashboard title={'Dashboard PAGE'} />} />
        </Routes>
    </Router>
  )
}

export default App
