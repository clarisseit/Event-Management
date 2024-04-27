import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventsList from './components/EventsList';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EventsList} />
          <Route exact path="/event/:id" component={EventDetails} />
          <Route exact path="/create" component={EventForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;