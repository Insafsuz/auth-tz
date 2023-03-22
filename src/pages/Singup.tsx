import { Link } from 'react-router-dom'
import Signup from '../components/Signup/Signup'

const SignupPage: React.FC = () => {
  return (
    <div>
      <Signup />
      <p className='question'>
        Already have a account? <Link to='/signin'>Sign In</Link>
      </p>
    </div>
  )
}
export default SignupPage
