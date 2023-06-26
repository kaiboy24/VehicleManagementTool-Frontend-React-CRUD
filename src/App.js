import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListVehicleComponent from './components/ListVehicleComponent';
import VehicleComponent from './components/VehicleComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route path = "/" element = { <ListVehicleComponent /> }></Route>
              <Route path = "/vehicles" element = { <ListVehicleComponent /> }></Route>
              <Route path = "/add-vehicle" element = { <VehicleComponent />} ></Route>
              <Route path = "/edit-vehicle/:id" element = { <VehicleComponent />}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </BrowserRouter>
    </div>
  );
}

export default App;