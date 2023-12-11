import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Google from './Google/google';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Google/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
