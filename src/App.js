import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './_components/privateRoute';
import LoginPage from "../src/pages/LoginPage/index";
import {history} from "../src/_helpers/history";
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router history={history}>
                            <Switch>
                                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                                <Route exact path="/" component={LoginPage}/>
                                <Route path="/login" component={LoginPage} />
                                <PrivateRoute path="/home-page" component={HomePage} />
                                {/* <Route path="/register" component={RegisterPage} /> */}
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
  );
}

export default App;
