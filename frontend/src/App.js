import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { GiveawayForm } from "./pages/GiveawayForm";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/createGiveaway' element={<GiveawayForm />} />
          <Route path='/editGiveaway/:id' element={<GiveawayForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
