import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { GiveawayForm } from "./pages/GiveawayForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createGiveaway' element={<GiveawayForm />} />
          <Route path='/editGiveaway/:id' element={<GiveawayForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
