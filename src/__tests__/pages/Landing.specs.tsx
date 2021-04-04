import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Landing from '../../Pages/Landing'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useHistory: () =>{
            mockedHistoryPush
        },
        Link: ({ children }: { children: React.ReactNode }) => children
    }
})

describe('SignUp Page', () => {
    it('shold be able to signup', () => {
        const { debug, getByPlaceholderText, getByText, ge } = render(<Landing />)
        console.log(debug)
        debug()

        const cpfField = getByPlaceholderText('Digite seu CPF')
        const nameField = getByPlaceholderText('Nome completo')
        const usernameField = getByPlaceholderText('Escolha um nome de usuário')
        const passwordField = getByPlaceholderText('Digite sua senha')
        const rePasswordField = getByPlaceholderText('Confirme sua senha')
        const buttonSubmit = getByText('CONTINUAR')

        fireEvent.change(cpfField, { target: { value: '12332312311'}})
        fireEvent.change(nameField, { target: { value: 'Jhon Wick da Silva'}})
        fireEvent.change(usernameField, { target: { value: 'jhonwickson'}})
        fireEvent.change(passwordField, { target: { value: '65432111'}})
        fireEvent.change(rePasswordField, { target: { value: '65432111'}})

        fireEvent.click(buttonSubmit)

        expect(mockedHistoryPush).toHaveBeenCalled()
        // expect(mockedHistoryPush).toHaveBeenCalledWith('/login')
    })
})
