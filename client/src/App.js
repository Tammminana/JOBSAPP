// import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Dashboard,Landing, Error, Register} from './pages'

// const Button = styled.button`
//   background: red;
//   color: white;
//   font-size: 1rem;
// `;

function App() {
  return (
    <Router>
    <nav>
      <Link to="/">Dashboard </Link>
      <Link to="/register">register </Link>
      <Link to="/landing">landing </Link>
    </nav>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/landing" element={<Landing/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
