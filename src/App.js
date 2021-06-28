
import './App.css';
import Dashboard from './components/Dashboard';


import EntryPage from './components/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import CreateTicket from './features/tickets/CreateTicket';
import ListTickets from './features/tickets/ListTickets';
import Ticket from './features/tickets/Ticket';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <CreateTicket /> */}
        {/* <ListTickets /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
