export const ErrorMessage:React.FC = ({children}) => {

    return(
        <div className="notification is-danger is-light">
            {children ?? 'Sorry, something went wrong'}
        </div>
    )
}