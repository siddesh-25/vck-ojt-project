import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import ContactPage from "./pages/ContactPage";
import './styles/Pages.css';
import Admissions from "./pages/Admissions";
import CoursesPage from "./pages/CoursesPage";

const App = ()=>{
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={ <HomePage/>} />
            <Route path="/about" element={ <AboutPage/>} />
            <Route path="/courses" element={< CoursesPage/>}/>
            <Route path="/contact" element={< ContactPage/>}/>
            <Route path="/admissions" element={<Admissions/>}/>
            </Routes>

      </Router>

    </div>

  )
}
export default App;