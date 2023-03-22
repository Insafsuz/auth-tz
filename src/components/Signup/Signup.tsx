import { Input, Button, Form, Select, DatePicker } from 'antd'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { setUser } from '../../store/slices/userSlice'

const Signup: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const fullName = Form.useWatch('fullName', form)
  const email = Form.useWatch('email', form)
  const password = Form.useWatch('password', form)
  // const { date } = Form.useWatch('date', form)
  const gender = Form.useWatch('gender', form)

  const handleSignup = () => {
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            id: user.uid,
            token: user.refreshToken,
            email: user.email,
            fullName,
            // date,
            gender,
          })
        )
        navigate('/')
      })
      .catch(console.error)
  }

  return (
    <div>
      <h1 className='title'>Sign up</h1>
      <Form onFinish={handleSignup} className='form' form={form} autoComplete='off'>
        <Form.Item
          name='fullName'
          rules={[
            { required: true, message: 'Please enter your name' },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input placeholder='Type your name' allowClear />
        </Form.Item>
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
        <Form.Item name='password' rules={[{ required: true }, { min: 6 }]} hasFeedback>
          <Input type='Password' placeholder='password' />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          dependencies={['password']}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('The two passwords that you entered does not match.')
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Confirm your password' />
        </Form.Item>
        <Form.Item name='gender' requiredMark='optional'>
          <Select placeholder='Select your gender'>
            <Select.Option value='male'>Male</Select.Option>
            <Select.Option value='female'>Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='date'
          rules={
            [
              // {
              //   required: true,
              //   message: 'Please provide your date of birth',
              // },
            ]
          }
          hasFeedback
        >
          <DatePicker style={{ width: '100%' }} picker='date' placeholder='Chose date of birth' />
        </Form.Item>
        <Form.Item>
          <Button block htmlType='submit' type='primary'>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Signup
