import logo from "./logo-icon.png";
import name from "./Chleese.png";
import "./App.css";
import Menu from "./Component/Menu.tsx";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='flex flex-center'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={name} className='logo-title' alt='title' />
        </div>
        <Menu />
        {/* <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a> */}
      </header>
      <div></div>
    </div>
  );
}

export default App;
