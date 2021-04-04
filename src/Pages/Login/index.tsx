import React, { useCallback, useRef, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaArrowRight } from 'react-icons/fa'
import { Form } from '@unform/web'
import * as yup from 'yup'

import Button from '../../components/Button'
import Header from '../../components/Header'

import api from '../../services/api'
import { UserResponse } from '../../types/user'
import updateReduxState from '../../services/updateReduxState'
import Loader from '../../components/Loader'
import Input from '../../components/Input'
import { FormHandles } from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'
import { AnyObject } from '../../types/utils'

import getIsAuth from '../../services/getIsAuth'
import { CardLoginForm, LoginContainer } from './styles'

const Login: React.FC = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ isFilled, setIsFilled ] = useState(false)
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

  useEffect(() => {
    if ( username.length > 3 &&
      password.length > 3 ) setIsFilled(true)
    else setIsFilled(false)
  }, [username, password])


  const handleSubmit = useCallback(async (data: AnyObject) => {
    const filteredData: AnyObject = {}

    Object.keys(data).forEach(key => {
      filteredData[key] = data[key].trim()
    })

    setLoading(true)
    try {
      formRef.current?.setErrors({})

      const schema = yup.object().shape({
        username: yup.string().required('Nome de usuário obrigatório '),
        password: yup.string().required('Senha obrigatória'),
      })

      await schema.validate(filteredData, {
        abortEarly: false
      })

      const { data: response } = await api.post<UserResponse>('/login', {
        "usuario": username,
        "senha": password
      })
      localStorage.setItem('@token_user', response.token)
      localStorage.setItem('@user_name', response.usuario.nome)
      updateReduxState()
      toast.success('Seja bem-vindo(a)')

      if (getIsAuth()) history.push('/dashboard')
      else history.push('/login')

    }
    catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
      if (Object.keys(err).includes('isAxiosError')) {
        toast.error('Ocorreu algum erro!')
        return history.push('/error')
      }
      setLoading(false)
      toast.error('Usuario ou senha incorretos!')
    } finally {
      setLoading(false)
    }

  }, [username, password, history])

  return (
    <>
      <Header />
      <LoginContainer>
        <CardLoginForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h3>Acesse a sua conta</h3>

            <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Digite seu usuário" autoFocus />
            <Input name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" type="password" />

            {
              loading
              ? <Loader />
              : <Button
                  type="submit"
                  text="Continuar"
                  Icon={FaArrowRight}
                  className="form-button"
                  onKeyDown={handleSubmit}
                  disabled={!isFilled ? true : false}
                />
            }

            <Link to="/recover">Esqueci minha senha &gt;</Link>
            <Link to="/">Ainda não sou cliente &gt;</Link>
          </Form>
        </CardLoginForm>
      </LoginContainer>
    </>
  )
}

export default Login
