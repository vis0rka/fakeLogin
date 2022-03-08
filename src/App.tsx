import 'bulma/css/bulma.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/Auth/PrivateRoute';
import { UserProvider } from './context/UserContext';
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login/Login';

const queryClient = new QueryClient()


export const App = () => {


  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <PrivateRoute path="/dashboard" >
              <Dashboard />
            </PrivateRoute>
            <Route  path="*" render={() => <Login />} />
          </Switch>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}