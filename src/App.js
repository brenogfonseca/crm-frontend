
import './App.css';
import Dashboard from './components/Dashboard';


import EntryPage from './components/EntryPage';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
