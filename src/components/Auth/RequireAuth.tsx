import { Redirect } from "react-router-dom";
import { useUserState } from "../../context/UserContext"

export const RequireAuth: React.FC = ({ children }) => {
    const { isAuth } = useUserState()

    console.log(isAuth)

    return (
        <>
            {isAuth === true ? { children } : <Redirect to="/" />}
        </>)
}