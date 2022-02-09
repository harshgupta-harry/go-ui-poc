import logo from './logo.svg';
import './App.css';
import { Badge, Button } from './lib/index';

function App() {
  return (
    <div className="App">
      <Button label="Submit" styles={{ margin: 40 }} />
      <Badge value={10} styles={{ margin: 40 }} />
    </div>
  );
}

export default App;
