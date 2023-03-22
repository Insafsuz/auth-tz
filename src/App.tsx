import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Singup'

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App
