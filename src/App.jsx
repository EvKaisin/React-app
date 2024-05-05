// import { useEffect, useState } from 'react';
import './app.css'
// import NavBar from './components/NavBar/NavBar';
// import Button from './components/Button/Button';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';



function App() {
  // const [word, setWord] = useState('Evgenii')
  return (
    <>
      {/* <div className="container">
        <p>{word}</p>
        <NavBar word={'evgenii'} />
        <Button text={'Click'} theme={'dark'} />
      </div> */}
      <Hero/>
      <div>
        <Welcome name={'Evgenii'}/>
        <Welcome name={'Marina'}/>
        <Welcome name={'Nikita'}/>
        <Welcome name={'Katya'}/>
      </div>
    </>
  );
}

export default App;
