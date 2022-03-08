import React from "react";
import { Redirect, Route, RouteProps} from "react-router-dom";
import { useUserState } from "../../context/UserContext";


export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const { isAuth } = useUserState()

    console.log(isAuth)
    
    return (
        <Route
            {...rest}
            render={() => {
                return isAuth === true ? (
                    children
                ) : (
                    <Redirect to="/" />
                );
            }}
        />
    )
}