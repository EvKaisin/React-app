import { Button } from "antd";
import "./registarion.css";

export default function Registration() {

  const dataUser = [];
  
  let login = '';
  let password = '';

  const getLogin = (e) => {
    login = e.target.value;
    console.log(login);
     
  };
  
  const getPassword = (e)=>{
    password = e.target.value;
  }

  const sendHandler = () =>{
    dataUser.push({login : login , password : password })
    console.log(dataUser)
  }
  
  
  return (
    <div className="registration">
      <form className='registration_field'>
        <p>Логин:</p>
        <input type="text" onChange={getLogin}/>
        <p>Пароль:</p>
        <input type="password"  onChange={getPassword}/>
        <p>Ваш возраст:</p>
        <input type="age"/>
        <Button color="default" variant="solid" className="registration_btn" onClick={sendHandler}>
            Регистрация
          </Button>
      </form>
    </div>
  );
}
