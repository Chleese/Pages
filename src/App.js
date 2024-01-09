import logo from "./logo-icon.png";
import name from "./Chleese.png";
import "./App.css";
import Menu from "./Component/Menu.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Component/About.tsx";
import Home from "./Component/Home.tsx";
import Projects from "./Component/Projects.tsx";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='flex flex-center'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={name} className='logo-title' alt='title' />
        </div>
      </header>
      <Router>
        <Menu />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
