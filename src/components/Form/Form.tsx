import { useState } from 'react'
import styles from './Form.module.scss'

interface FormProps {
  title: string
  handleClick: (
    email: string,
    password: string,
    fullName: string,
    date: string,
    gender: string
  ) => void
}

const Form: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [date, setDate] = useState('')
  const [gender, setGender] = useState('')

  return (
    <div className={styles.form}>
      <h1 className={styles.form__title}>{title}</h1>
      <div className={styles.form__wrapper}>
        {title === 'Sign Up' ? (
          <div>
            <input
              className={styles.form__input}
              type='text'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder='Full Name'
            />
            <input
              className={styles.form__input}
              type='date'
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <div className={styles.gender}>
              <div className={styles.gender__wrapper}>
                <div className={styles.gender__item}>
                  <input
                    id='male'
                    type='radio'
                    value={gender}
                    onClick={() => setGender('Male')}
                    defaultChecked={gender === 'Male'}
                    name='gender'
                  />
                  <label htmlFor='male'>Male</label>
                </div>
                <div className={styles.gender__item}>
                  <input
                    id='female'
                    type='radio'
                    value={gender}
                    onClick={() => setGender('Female')}
                    defaultChecked={gender === 'Female'}
                    name='gender'
                  />
                  <label htmlFor='female'>Female</label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <input
          className={styles.form__input}
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          className={styles.form__input}
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        {title === 'Sign Up' ? (
          <input className={styles.form__input} type='password' placeholder='Confirm password' />
        ) : (
          <></>
        )}
        <button
          className={styles.form__button}
          onClick={() => handleClick(email, password, fullName, date, gender)}
        >
          {title}
        </button>
      </div>
    </div>
  )
}
export default Form
