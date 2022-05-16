import "./Global.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/pages/Home/Home';
import ViewItem from './Components/pages/ViewItem/Item'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ViewItem/:id" element={<ViewItem/>} />
      </Routes>
    </Router>
    
    );
  }
  
  export default App;
  
