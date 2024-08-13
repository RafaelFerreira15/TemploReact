import './index.css';
import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Reportagem from './Reportagem';
import Viagens from './Viagens';
import SobreNos from './SobreNos';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="conteudo">
          <Switch>
            <Route exact path='/'>
              <Main></Main>
            </Route>
            <Route path='/Reportagem'>
              <Reportagem></Reportagem>
            </Route>
            <Route path='/Viagens'>
              <Viagens></Viagens>
            </Route>
            <Route path="/SobreNos">
              <SobreNos></SobreNos>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
