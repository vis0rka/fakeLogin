import { AxiosInstance } from 'axios'
import { IAlbumns, IUser } from './StaticTypes'

abstract class ApiBase {
    constructor(protected client: AxiosInstance) {}
}


export class FakeApi extends ApiBase {
    constructor(client: AxiosInstance, private getUserId: () => string | null) {
        super(client)
    }

    getUsers = async () => {
        const res = await this.client.get<IUser[]>('/users')

        return res.data
    }

    getAlbums = async () => {
        const res = await this.client.get<IAlbumns[]>(`/users/${this.getUserId()}/albums`)

        return res.data
    }
}