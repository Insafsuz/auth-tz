import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import Form from './Form/Form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Signup: React.FC = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()

  const handleSignup = (
    email: string,
    password: string,
    fullName: string,
    date: string,
    gender: string
  ) => {
    const auth = getAuth()
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error)
  }

  return <Form title='Sign Up' handleClick={handleSignup} />
}
export default Signup
