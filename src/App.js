
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Home from './pages/Home';
import Appointment from "./pages/Appointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
config.autoAddCss = false;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
          <Route path='/dashboard/appointment' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
