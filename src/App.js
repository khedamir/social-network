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
        <Navbar store = {props.store}/>

        <div className='app-wrapper__content'>

          <Route path = '/profile' render={()=> 
            <Profile store = {props.store}
              // profilePage = {props.state.profilePage} 
              // dispatch = {props.dispatch}
              />} />

          <Route path = '/dialogs' render={()=> 
            <DialogsContainer
              store = {props.store}
              // dialogsPage = {props.state.dialogsPage} 
              // dispatch = {props.dispatch}
              />} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
