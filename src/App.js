
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard';
import EntryPage from './components/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import CreateTicket from './features/tickets/CreateTicket';
import ListTickets from './features/tickets/ListTickets';
import Ticket from './features/tickets/Ticket';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <EntryPage />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/create-ticket" >
            <CreateTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets" >
            <ListTickets />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId" >
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
