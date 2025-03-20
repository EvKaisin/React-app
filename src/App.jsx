import { useState } from "react";
import "./app.css";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [click, setClick] = useState(false); //задал изначальное состояние
  const [about, setAbout] = useState(false);
  const formHandler = () => {
    setClick(!click); // изменил изначальное состояние на противоположное
  };

  const aboutHandler = () => {
    setAbout(!about); // изменил изначальное состояние на противоположное
  };

  return (
    <>
      <div className="registration_text">
       <Navbar formHandler={formHandler} aboutHandler={aboutHandler}/> 
       {click && <Registration />}
       {about && <About />}
      </div>
    </>
  );
}

export default App;
