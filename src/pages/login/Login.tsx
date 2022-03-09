import React, { useReducer } from 'react'
import { Redirect } from 'react-router-dom'
import { Textfield } from '../../components/Form/Textfield'
import { useUserActions } from '../../context/UserContext'
import { api } from '../../lib/api/Api'
import './index.scss'

export const Login: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initalValue)
    const { init } = useUserActions()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (state.status !== 'loading') {
            dispatch({ type: 'SET_STATUS', payload: { status: 'loading' } })
            try {
                const users = await api.fakeApi.getUsers()

                const validUser = users.find(user => user.username === state.username)

                if (!validUser) {
                    dispatch({ type: 'SET_ERROR', payload: { type: 'userName' } })
                } else if (state.password !== '123456') {
                    dispatch({ type: 'SET_ERROR', payload: { type: 'password' } })
                } else {
                    init({ account: validUser, isAuth: true })
                    api.setUserId(validUser.id.toString())
                    dispatch({ type: 'SET_STATUS', payload: { status: 'auth' } })
                }
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: { type: 'unkown' } })
            } 
        }
    }

    if(state.status === 'auth') {
        return <Redirect to="/dashboard/albums" />
    }
 
    return (
        <div className="login-root">
            <form className='box box-container has-background-white-bis' onSubmit={handleSubmit}>
                <p className="title is-4 has-text-weight-bold">
                    Hello, geek!
                </p>

                <Textfield
                    label='Username'
                    type='text'
                    placeholder='johnny'
                    value={state.username}
                    setValue={(val) => dispatch({ type: 'SET_USERNAME', payload: { username: val } })}
                    error={state.error === 'userName' ? 'Username is not valid' : ''}
                    inputProps={{ required: true }}
                />
                <Textfield
                    label='Password'
                    type='password'
                    placeholder='*****'
                    value={state.password}
                    setValue={(val) => dispatch({ type: 'SET_PASSWORD', payload: { password: val } })}
                    error={state.error === 'password' ? 'Wrong password' : ''}
                    inputProps={{ required: true }}
                />
                <div className='is-flex-direction-row is-justify-content-flex-end is-flex'>
                    <button type='submit' className={["button", "is-primary", state.status === 'loading' ? 'is-loading' : ''].join(' ')}>Sign in</button>
                </div>
            </form>
        </div>
    )
}

const initalValue = {
    username: '',
    password: '',
    error: null,
    status: 'idle' as StatusType
}

type ReducerAction =
    | {
        type: 'SET_USERNAME'
        payload: {
            username: string
        }
    }
    | {
        type: 'SET_PASSWORD'
        payload: {
            password: string
        }
    }
    | {
        type: 'SET_ERROR'
        payload: {
            type: ErrorType
        }
    }
    | {
        type: 'SET_STATUS'
        payload: {
            status: StatusType
        }
    }

type ErrorType = 'userName' | 'password' | 'unkown' | null

type StatusType = 'idle' | 'loading' | 'auth'

type LoginState = {
    username: string
    password: string
    error: ErrorType
    status: StatusType
}

const reducer: React.Reducer<LoginState, ReducerAction> = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload.username,
                error: null
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload.password,
                error: null
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload.type
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}
