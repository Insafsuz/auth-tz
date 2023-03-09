import { Link } from 'react-router-dom'

const Sign = () => {
  return (
    <div>
      <h1>Sign In </h1>
      <p>
        Or <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  )
}
export default Sign
