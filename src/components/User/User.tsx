import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { useAppSelector } from '../../hooks/useTypedSelector'
import styles from './User.module.scss'
import { removeUser } from '../../store/slices/userSlice'

const User: React.FC = () => {
  const dispatch = useDispatch()
  const { email, fullName, date, gender } = useAppSelector(state => state.user)

  return (
    <div className={styles.user}>
      <div className={styles.avatar}>{fullName[0]}</div>
      <ul>
        <li>Name: {fullName}</li>
        <li>Date: {date}</li>
        <li>Gender: {gender}</li>
        <li>Email: {email}</li>
      </ul>
      <Button onClick={() => dispatch(removeUser({ fullName, date, gender }))}>Log out</Button>
    </div>
  )
}
export default User
