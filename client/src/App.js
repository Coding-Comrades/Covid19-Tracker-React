import './App.css';
import Home from './component/home/Home';
import Navbar from './component/Navbar';
import Vaccination from './component/vaccination/Vaccination';
import Resources from './component/resources/Resources';
import DbForm from './component/resources/DbForm';
import VForm from './component/vaccination/VForm';
import About from './component/About';
import Footer from './component/Footer';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/medicines">
        <Resources />
      </Route>
      <Route path="/addlead">
        <DbForm />
      </Route>
      <Route path="/vaccination">
        <Vaccination />
      </Route>
      <Route path="/vform">
        <VForm />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
