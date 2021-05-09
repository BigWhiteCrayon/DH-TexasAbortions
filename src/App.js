
import './App.css';
import ClinicMap from './ClinicMap.js'

function App() {
  console.log(process.env.REACT_APP_GOOGLE_API)
  return (
    <div className="App">
        <ClinicMap />
    </div>
  );
}

export default App;
