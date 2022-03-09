import { Page } from "components/Page/Page"
import { Route, Switch } from "react-router-dom"
import { Album } from "./album/Album"
import { AlbumsList } from "./albums/Albums"
import { User } from "./user/User"


export const DashboardRouter = () => {

    return (
        <Page>
            <Switch>
                <Route exact path={"/dashboard/albums"} >
                    <AlbumsList />
                </Route>
                <Route path="/dashboard/albums/:id" >
                    <Album />
                </Route>
                <Route path="/dashboard/user" >
                    <User />
                </Route>
            </Switch>
        </Page>
    )
}