import Axios from 'axios'
import { FakeApi } from './FakeApi'

class Api {
    readonly baseUrl = 'https://jsonplaceholder.typicode.com'
    readonly client = Axios.create({ baseURL: this.baseUrl, timeout: 15000 })

    private userId: string | null = null

    setUserId = (userId: string) => {
        this.userId = userId
    }

    private getUserId = () => {
        return this.userId
    }

    readonly fakeApi = new FakeApi(this.client, this.getUserId)
}

export const api = new Api()

