import { useQuery } from 'react-query'
import { api } from '../../lib/api/Api'
import './index.css'

export const Dashboard: React.FC = () => {
    const { data, status } = useQuery(['users-albums'], () =>
        api.fakeApi.getAlbums()
    )


    return (
        <div className='root'>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>User</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {!data ? <>
                    <p>...loading</p>
                </> : <div className='grid'>
                    {data.map(album => {
                        return (
                            <div className='card'>
                                <div className='card-content'>
                                    {album.title}
                                </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div >
    )
}