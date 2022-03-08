import React, { useReducer } from 'react'
import { Textfield } from '../../components/Form/Textfield'
import './index.css'

export const Login: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initalValue)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log(state)
    }

    return (
        <div className="main">
            <form className='box box-container has-background-white-bis' onSubmit={handleSubmit}>
                <p className="title is-4 has-text-weight-bold">
                    Hello, geek!
                </p>

                <Textfield
                    label='Username'
                    type='text'
                    placeholder='jhonny'
                    value={state.username}
                    setValue={(val) => dispatch({type: 'SET_USERNAME', payload: {username: val}})}
                />
                <Textfield
                    label='Password'
                    type='password'
                    placeholder='*****'
                    value={state.password}
                    setValue={(val) => dispatch({type: 'SET_PASSWORD', payload: {password: val}})}
                />
                <div className='is-flex-direction-row is-justify-content-flex-end is-flex'>
                    <button type='submit' className="button is-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

const initalValue = {
    username: '',
    password: '',
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

type LoginState = {
    username: string
    password: string
}

const reducer: React.Reducer<LoginState, ReducerAction> = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload.username
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload.password
            }

        default:
            return state
    }
}
