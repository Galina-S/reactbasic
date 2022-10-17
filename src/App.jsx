import './App.scss'
import {GermanNouns} from './components/GermanNouns';

function App() {
  return (
    <div className="App">
    <h1>Test site</h1>
    <GermanNouns article="die"/>  
    <GermanNouns article="der"/>  
    <GermanNouns article="das"/>  
    </div>
  );
}
export default App
