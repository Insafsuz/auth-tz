import { Navigate } from 'react-router-dom'
import User from '../components/User/User'
import { useAppSelector } from '../hooks/useTypedSelector'

const Home: React.FC = () => {
  const { email } = useAppSelector(state => state.user)

  const isAuth = !!email

  return isAuth ? <User /> : <Navigate replace to='/signin' />
}
export default Home
