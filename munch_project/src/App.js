
import Home from './components/Home'
import Meal from './components/Meal'
import  ReactDOM  from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
     <div className="content">
      <Router>
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = 'meal' element={<Meal />} />
        </Routes>
      </Router>
     </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export default App;
