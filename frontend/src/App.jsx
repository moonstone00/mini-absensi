import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home title={'Home Page'} />} />
          <Route path='/login' element={<Login title={'LOGIN PAGE'} description={'ABSENSI APPS'} />} />
        </Routes>
    </Router>
  )
}

export default App
