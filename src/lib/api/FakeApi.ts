import { AxiosInstance } from 'axios'
import { IAlbum, IUser } from './StaticTypes'

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

    getUserDetails = async () => {
        const res = await this.client.get<IUser>(`/users/${this.getUserId()}`)

        return res.data
    }

    getAlbums = async () => {
        const res = await this.client.get<IAlbum[]>(`/users/${this.getUserId()}/albums`)

        return res.data
    }

    getAlbumById = async (id:string) => {
        const res = await this.client.get<IAlbum>(`/albums/${id}`)

        return res.data
    }
}