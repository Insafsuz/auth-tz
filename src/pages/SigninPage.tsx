import { Link } from 'react-router-dom'
import Signin from '../components/Signin'

const SigninPage: React.FC = () => {
  return (
    <div>
      <Signin />
      <p className='question'>
        Dont have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  )
}
export default SigninPage
