import React, { createContext, useMemo } from 'react'
import { IUser } from '../lib/api/StaticTypes'


export type UserState = {
    account: IUser | null
    isAuth: boolean
}

const initalState: UserState = {
    account: null,
    isAuth: false
}

export const userStateContext = createContext<UserState | undefined>(undefined)
export const userDispatchContext = createContext<React.Dispatch<ReducerAction> | undefined>(undefined)

type ReducerAction =
    | {
        type: 'INIT'
        payload: UserState
    }
    | {
        type: 'LOGOUT'
    }


const reducer: React.Reducer<UserState, ReducerAction> = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return {
                ...action.payload
            }
        case 'LOGOUT':
            return {
                account: null,
                isAuth: false
            }
        default:
            return state
    }
}

export const UserProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initalState)

    return (
        <userStateContext.Provider value={state}>
            <userDispatchContext.Provider value={dispatch}>{children}</userDispatchContext.Provider>
        </userStateContext.Provider>
    )
}

export const useUserState = () => {
    const context = React.useContext(userStateContext)
    if (context === undefined) {
        throw new Error('useUserState is either used without UserProvider or before user is initialized.')
    }
    return context
}

export const useUserActions = () => {
    const dispatch = React.useContext(userDispatchContext)

    if (dispatch === undefined) {
        throw new Error('useUserActions must be used within a UserProvider')
    }

    return useMemo(
        () => ({
            init: (user: UserState) => dispatch({
                type: 'INIT',
                payload: {
                    ...user
                },
            }),
            logout: () => dispatch({
                type: 'LOGOUT',
            })

        }),
        [dispatch],
    )
}

