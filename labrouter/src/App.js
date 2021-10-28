import './App.css';
import Nav from './Nav';
import { Route , BrowserRouter,Switch} from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';
import Contactus from './Contactus';


function App() {
  return (
 <BrowserRouter> 
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/aboutus"><Aboutus/></Route>
      <Route path="/contactus"><Contactus/></Route>
      </Switch>

    </div>
   </BrowserRouter>
  );
}

export default App;
