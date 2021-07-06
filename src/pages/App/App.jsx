import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import CarDetailPage from '../CarDetailPage/CarDetailPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  return (
    <main className="App">
          <>
            <NavBar />
            <Switch>
              <Route path="/cardetail">
                <CarDetailPage />
              </Route>
              <Redirect to="/cardetail" />
            </Switch>
          </>
    </main>
  );
}
