import { ErrorMessage } from "components/Errormessage/Errormessage"
import { Loader } from "components/Loader/Loader"
import { api } from "lib/api/Api"
import { useQuery } from "react-query"

export const User = () => {
    const { data, status } = useQuery(['user'], () =>
        api.fakeApi.getUserDetails()
    )

    if(status === 'error') {
        return (
            <div className="container">
                <ErrorMessage />
            </div>
        )
    }

    return <div className="container">
        {!data ? <Loader /> :
            <div className="card">
                <div className="card-content">
                    <div className="block">
                        <p>Name: <strong>{data.name}</strong></p>
                    </div>
                    <div className="block">
                        <p>Username: <strong>{data.username}</strong></p>
                    </div>
                    <div className="block">
                        <p>PHone: <strong>{data.phone}</strong></p>
                    </div>
                    <div className="block">
                        <p>Email: <strong>{data.email}</strong></p>
                    </div>
                    <div className="block">
                        <p>Website: <strong>{data.website}</strong></p>
                    </div>
                    <div className="block">
                        <p>City: <strong>{data.address.city}</strong></p>
                    </div>
                    <div className="block">
                        <p>Street: <strong>{data.address.city}</strong></p>
                    </div>
                    <div className="block">
                        <p>Zipcode: <strong>{data.address.zipcode}</strong></p>
                    </div>
                    <hr />
                    <div className="block">
                        <p>Company: <strong>{data.company.name}</strong></p>
                    </div>
                </div>
            </div>
        }
    </div>
}