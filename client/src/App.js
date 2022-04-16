// import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages'
import { AddJob, AllJobs, Stats, Profile, SharedLayout } from './pages/dashboard/index.js';

// const Button = styled.button`
//   background: red;
//   color: white;
//   font-size: 1rem;
// `;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
