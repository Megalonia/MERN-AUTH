import {BrowerRouter as Router, Switch, Route } from 'react-router-dom'

/* ROUTING */
import PrivateRoute from "./components/routing/PrivateRoute";

/* SCREENS */
import PrivateScreen        from './components/screens/PrivateScreen';
import LoginScreen          from './components/screens/LoginScreen';
import RegisterScreen       from './components/screens/RegisterScreen';
import ForgotPassowrdScreen from './components/screens/ForgotPassowrdScreen';
import ResetPasswordScreen  from './components/screens/ResetPasswordScreen';

const App = () => {
  return (
    <Router>
        <div className="app">
            <Switch>
                <PrivateRoute exact path="/"                    components={PrivateScreen}/>
                <Route exact path="/login"                      component={LoginScreen}/>
                <Route exact path="/register"                   component={RegisterScreen}/>
                <Route exact path="/forgotpassword"             component={ForgotPassowrdScreen}/>
                <Route exact path="/passwordreset/:resetToken"  component={ResetPasswordScreen}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
