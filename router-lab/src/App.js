import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
    </div>
    
  );
}

export default App;

