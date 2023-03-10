import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

import Form from './Form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Signin: React.FC = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()

  const handleSignin = (
    email: string,
    password: string,
    fullName: string,
    date: string,
    gender: string
  ) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        disptach(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            fullName,
            date,
            gender,
          })
        )
        navigate('/')
      })
      .catch(() => alert('Invalid user!'))
  }

  return <Form title='Sign In' handleClick={handleSignin} />
}
export default Signin
