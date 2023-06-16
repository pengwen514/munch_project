
import Home from './components/Home'
import Meal from './components/Meal'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
     <div className="content">
      <Router>
        <Routes>
          <Route exact path = '/home' Component={Home} />
          <Route path = '/meal' Component={Meal} />
        </Routes>
      </Router>
     </div>
    </div>
  );
}

export default App;
