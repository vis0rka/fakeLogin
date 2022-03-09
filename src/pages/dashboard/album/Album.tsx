import { ErrorMessage } from "components/Errormessage/Errormessage"
import { Loader } from "components/Loader/Loader"
import { api } from "lib/api/Api"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export const Album: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data, status } = useQuery([id, 'album'], () =>
        api.fakeApi.getAlbumById(id)
    )

    if(status === 'error') {
        return (
            <div className="container">
                <ErrorMessage />
            </div>
        )
    }

    return (
        <div className="container">
            {
                !data ? <div className='container'><Loader /></div> :
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                {data.title}
                            </p>
                        </header>
                        <div className="card-content">
                            <p>id:{data.id}</p>
                            <p>user id:{data.userId}</p>
                        </div>
                    </div>
            }
        </div>
    )
}