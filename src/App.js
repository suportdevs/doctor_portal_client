
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Home from './pages/Home';
import Appointment from "./pages/Appointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

config.autoAddCss = false;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    {/* <Home></Home> */}
    </BrowserRouter>
  );
}

export default App;
