import { useState } from "react";
import "./app.css";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SmartHouse from "./components/SmartHouse/SmartHouse";

function App() {
  // const [click, setClick] = useState(false); //задал изначальное состояние
  // const [about, setAbout] = useState(false);
  // const formHandler = () => {
  //   setClick(!click); // изменил изначальное состояние на противоположное
  // };

  // const aboutHandler = () => {
  //   setAbout(!about); // изменил изначальное состояние на противоположное
  // };
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            Главная страница
          </>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/smarthouse" element={<SmartHouse/>}/>
        <Route path="/*" element={<>Такой страницы не существует</>}/>

      </Routes>
      {/* <div className="registration_text">
       <Navbar formHandler={formHandler} aboutHandler={aboutHandler}/> 
       {click && <Registration />}
       {about && <About />}
      </div> */}
    </>
  );
}

export default App;
