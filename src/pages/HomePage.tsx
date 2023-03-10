import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../components/hooks/useTypedSelector'
import { removeUser } from '../store/slices/userSlice'

const Home = () => {
  const dispatch = useDispatch()

  const { email, fullName, date, gender } = useAppSelector(state => state.user)

  const isAuth = !!email

  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <div>
        <h1>{fullName}</h1>
        <p>{date}</p>
        <p>{gender}</p>
      </div>
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate replace to='/signin' />
  )
}
export default Home
