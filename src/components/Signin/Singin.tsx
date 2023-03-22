import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { setUser } from '../../store/slices/userSlice'
import { Input, Button, Form } from 'antd'
import { auth } from '../../firebase'

const Singin: React.FC = () => {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const email = Form.useWatch('email', form)
  const password = Form.useWatch('password', form)

  const { fullName, date, gender } = useAppSelector(state => state.user)

  const handleSignin = () => {
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
  return (
    <div>
      <h1 className='title'>Sign in</h1>
      <Form onFinish={handleSignin} className='form' form={form} autoComplete='off'>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
          hasFeedback
        >
          <Input placeholder='Type your email' allowClear />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true }]} hasFeedback>
          <Input type='Password' placeholder='password' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' type='primary'>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Singin
