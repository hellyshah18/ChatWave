
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
     <h1>Welcome to MERN whatsapp</h1>
      <div className='app_body'>
        <Sidebar />
        <Chat/>
      </div>
    </div>
  );
}

export default App;
