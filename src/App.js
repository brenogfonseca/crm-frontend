
import './App.css';
import Dashboard from './components/Dashboard';


import EntryPage from './components/EntryPage';
import DefaultLayout from './layout/DefaultLayout';
import Tickets from './features/tickets/Tickets';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <Tickets />
      </DefaultLayout>
    </div>
  );
}

export default App;
