import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import AddCar from './components/AddCar';
import ReWrite from './components/ReWrite';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddCar/>}/>
        <Route path="/add" element={<AddCar/>}/>
        <Route path="/re-write/:id" element={<ReWrite/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
