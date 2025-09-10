import './App.css';
// in this place imported digital clock from another component
import DigitalClock from './clock';

function App() {
  return (
    <div className="App">
    // in this place use digital clock
      <DigitalClock/>
    </div>
  );
}

export default App;
