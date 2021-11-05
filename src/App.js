// import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import state from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar/>

        <div className='app-wrapper__content'>

          <Route path = '/profile' render={()=><Profile/>} />

          <Route path = '/dialogs' render={()=><DialogsContainer/>} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
