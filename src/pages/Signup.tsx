import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <h1>Log In</h1>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}
export default Signup
