import { Link } from 'react-router-dom'
import Singin from '../components/Signin/Singin'

const SigninPage: React.FC = () => {
  return (
    <div>
      <Singin />
      <p className='question'>
        Dont have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  )
}
export default SigninPage
