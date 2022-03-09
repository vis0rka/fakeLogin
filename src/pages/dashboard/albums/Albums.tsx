import { ErrorMessage } from 'components/Errormessage/Errormessage'
import { Loader } from 'components/Loader/Loader'
import { useUserState } from 'context/UserContext'
import { api } from 'lib/api/Api'
import { useQuery } from 'react-query'
import { Link, useRouteMatch } from 'react-router-dom'
import './index.scss'

export const AlbumsList: React.FC = () => {
    const { path } = useRouteMatch()
    const { account } = useUserState()
    const { data, status } = useQuery([account?.id, 'users-albums'], () =>
        api.fakeApi.getAlbums()
    )

    if(status === 'error') {
        return (
            <div className="container">
                <ErrorMessage />
            </div>
        )
    }

    if (!data) {
        return <div className='container'><Loader /></div>
    }

    return (
        <div className='albums-root'>
            <div className='grid'>
                {data.map(album => {
                    return (
                        <Link to={`${path}/${album.id}`} className='card is-clickable' key={album.id}>
                            <div className='card-content'>
                                <p className='is-size-5 has-text-centered'>
                                    {album.title}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}