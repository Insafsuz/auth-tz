import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  )
}

export default App
