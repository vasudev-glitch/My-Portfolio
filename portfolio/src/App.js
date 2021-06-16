
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <Navbar />
      <Particles 
       params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
              type:"circle",
              stroke: {
                width:6,
                color:"#f9ab00"
              }
          }
        }
      }}
      />
      <Header /> 
      </>
    
  );
}

export default App;
