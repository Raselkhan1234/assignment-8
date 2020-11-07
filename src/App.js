import logo from './logo.svg';
import './App.css';
import Post from './Components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import MainDetails from './Components/MainDetails/MainDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/post'>
            <Post />
          </Route>
          <Route path="/post/:id">
            <MainDetails />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
