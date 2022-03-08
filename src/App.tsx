import 'bulma/css/bulma.min.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './pages/login/Login';


export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}