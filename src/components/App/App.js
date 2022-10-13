import './App.css';
import { Switch, Route } from 'react-router-dom';
import Greetings from '../Greetings/Greetings';
import Users from '../Users/Users';

function App() {
    return (
        <div className='page'>
            <Switch>
                <Route exact path='/'>
                    <Greetings />
                </Route>
                <Route path='/users'>
                    <Users />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
