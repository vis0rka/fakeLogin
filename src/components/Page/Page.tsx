import { Link } from 'react-router-dom'
import './index.scss'

export const Page: React.FC = ({ children }) => {

    return (
        <div className='page-root is-flex is-flex-direction-column'>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className='navbar-start'>
                    <div className="navbar-item">
                            <Link to="/dashboard/albums" className="button is-primary">
                                <strong>Dashboard</strong>
                            </Link>
                        </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to='/dashboard/user' className="button is-primary">
                                <strong>User</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='main is-flex is-flex-direction-column is-flex-grow-1 p-6'>
                {children}
            </div>
        </div>
    )
}