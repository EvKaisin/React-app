import { useState } from "react";
import "./app.css";
import Registration from "./components/Registration/Registration";
import About from "./components/About/About";

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
        <p>Регистрация</p>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/parakeet-line/48/sorting-arrows.png"
          alt="sorting-arrows"
          onClick={formHandler}
        />
        {click && <Registration />}
        {/* по клику указывает какой компонент отобразить */}
      </div>
        <p onClick={aboutHandler}>Обо мне</p>
        {about && <About />}
    </>
  );
}

export default App;
