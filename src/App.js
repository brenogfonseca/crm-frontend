
import './App.css';


import EntryPage from './components/EntryPage';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <div className="App">
      {/* <EntryPage/> */}
      <DefaultLayout>
        Send page components
      </DefaultLayout>
    </div>
  );
}

export default App;
