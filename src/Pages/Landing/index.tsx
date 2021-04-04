import React, { useState, useCallback, useEffect, ChangeEvent, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as yup from 'yup'
import api from '../../services/api'
import getIsAuth from '../../services/getIsAuth'
import getValidationErrors from '../../utils/getValidationErrors'
import { maskCPF, removeMaskCPF } from '../../utils/mask'


import {
  Section,
  BannerMargin,
  CardAcess,
  CardCadLogin,
  Banner,
  LogoImg,
  StyleMargTop,
  StyleMargBotton,

  CardSection,
  CardMargin,
  CardFooter
} from './styles'
import LogoImgnow from '../../assets/logonow.png'


import Input from '../../components/Input'
import Loader from '../../components/Loader'


import { toast } from 'react-toastify'
import { AnyObject } from '../../types/utils'
import { UserResponse } from '../../types/user'
import updateReduxState from '../../services/updateReduxState'

const Landing: React.FC = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [cpfMask, setCpfMask] = useState('')
  const [loading, setLoading] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const history = useHistory()
  const formRef = useRef<FormHandles>(null)

  const [isFilled, setIsFilled] = useState(false)
  // Atualiza a mascara do CPF
  useEffect(() => {
    setCpf(removeMaskCPF(cpfMask))
  }, [cpfMask])

  useEffect(() => {
    if (name.length > 3 &&
      password &&
      confirmPassword &&
      cpf.length === 11 &&
      checkCpf(cpf) &&
      username &&
      passwordMatch) setIsFilled(true)
    else setIsFilled(false)
  }, [
    name,
    username,
    password,
    confirmPassword,
    cpf,
    username
  ])
  // Lidar com o registro
  const handleSubmit = useCallback(async (data: AnyObject) => {
    const filteredData: AnyObject = {}

    Object.keys(data).forEach(key => {
      filteredData[key] = data[key].trim()
    })

    setLoading(true)

    try {
      formRef.current?.setErrors({})

      const schema = yup.object().shape({
        cpf: yup.string().min(14, 'Obrigatório ter 11 digitos'),
        username: yup.string().required('Nome de usuário obrigatório '),
        name: yup.string().required('Nome completo obrigatório'),
        password: yup.string().min(6, 'No mínimo 6 digitos'),
        confirmPassword: yup.string().min(6, 'No mínimo 6 digitos')
      })

      await schema.validate(filteredData, {
        abortEarly: false
      })

      if (password !== confirmPassword) {
        return
      }

      const { status } = await api.post('/usuarios', {
        "cpf": cpf,
        "login": username,
        "nome": name,
        "senha": password,
      })

      if (status === 200 || status === 201) {
        const { data } = await api.post<UserResponse>('/login', {
          usuario: username,
          senha: password
        })

        localStorage.setItem('@token_user', data.token)
        localStorage.setItem('@user_name', data.usuario.nome)
        updateReduxState()

        toast.success('Usuário registrado!')
        history.push('/dashboard')
      } else {
        toast.error('Ocorreu algum erro!')
        history.push('/error')
      }
    } catch (err) {
      if (err.response?.data?.error?.includes('Já existe um usuario cadastrado com o login')) {
        toast.error(`Nome de usuário "${username}" indisponível!`)
      }
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
      toast.error('O formulário está incorreto!')
    } finally {
      setLoading(false)
    }
  }, [cpf, username, name, password, confirmPassword, history])
  // Check if user is authenticated
  const handleRedirectToLogin = useCallback(() => {
    const isAuth = getIsAuth()

    if (isAuth) history.push('/dashboard')
    else history.push('/login')
  }, [history])
  const handleSetCpfMask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCpfMask(
      maskCPF(
        removeMaskCPF(e.target.value)
      )
    )
  }, [])

  const handleSetConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    if (formRef.current?.getFieldRef('password').value?.length
      && formRef.current?.getFieldRef('confirmPassword').value?.length) {
      if (formRef.current?.getFieldRef('password').value !== formRef.current?.getFieldRef('confirmPassword').value) {
        setPasswordMatch(false)
      } else setPasswordMatch(true)
    } else setPasswordMatch(true)
  }

  const checkCpf = (strCPF: string): boolean => {
        let sum
        let rest
        sum = 0
        let i = 1
      if (strCPF == "00000000000" 
      || strCPF == "11111111111" 
      || strCPF == "22222222222" 
      || strCPF == "33333333333" 
      || strCPF == "44444444444"
      || strCPF == "55555555555"
      || strCPF == "66666666666"
      || strCPF == "77777777777"
      || strCPF == "88888888888"
      || strCPF == "99999999999") return false
    
      for (i=1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i)
      rest = (sum * 10) % 11
    
        if ((rest == 10) || (rest == 11))  rest = 0
        if (rest != parseInt(strCPF.substring(9, 10)) ) return false
    
      sum = 0
        for (i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i)
        rest = (sum * 10) % 11
    
        if ((rest == 10) || (rest == 11))  rest = 0
        if (rest != parseInt(strCPF.substring(10, 11) ) ) return false
        return true
  }

  return (
    <>
      <CardAcess>
        <button onClick={handleRedirectToLogin}>Acessar minha conta!</button>
      </CardAcess>

      <StyleMargTop />
      <BannerMargin>

        <Banner>
          <LogoImg>
            <img src={LogoImgnow} alt="" />
            <div>
              <p>Uma conta digital do seu tempo!</p>
            </div>
          </LogoImg>

          <CardCadLogin>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h2> Solicite sua conta e cartão de crédito do NoWBank agora!</h2>
              <Input name="cpf" maxLength={14} value={cpfMask} onChange={handleSetCpfMask} placeholder="Digite seu CPF" />
              <Input name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Escolha um nome de usuário" />
              <Input name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
              <Input name="password" value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" />
              <Input name="confirmPassword" value={confirmPassword} type="password" onChange={handleSetConfirmPassword} placeholder="Confirme sua senha" />
              {
                !passwordMatch && <span className="pwd-wrong">Senha diferente</span>
              }
              {
                loading ?
                <Loader /> : <button disabled={!isFilled} type="submit">CONTINUAR<FaArrowRight className="ArrowRight" /></button>}
            </Form>
          </CardCadLogin>
        </Banner>
      </BannerMargin>
      <StyleMargBotton />

      <CardMargin>
        <Section>
          <div>
            <p>Sem taxa de manutenção nem tarifas escondidas.
          <br />Com nossa Conta digital, seu investimento rende mais que a poupança!</p>
            <button>Solicite uma conta</button>
          </div>
        </Section>
      </CardMargin>

      <CardSection>

        <h1>ZERO ANUIDADE</h1>
        <p>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>

        <span>0,00</span>


      </CardSection>


      <CardFooter>
      <ul>
        <li>
            <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/betocostadev/404-bank" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
            </a>
        </li>
        <li>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
            </a>
        </li>
    </ul>

        <footer>
          <div>
          <h1>Simplifique a sua vida. Peça seu convite.</h1>
          <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00
           <br/> Rua Fictícia, 999 - 00000-000 - São Paulo, SP
            <br/>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>

          </div>
        <aside>

        </aside>
        </footer>


      </CardFooter>
    </>
  )
}

export default Landing
