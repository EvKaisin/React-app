import { Button } from "antd";
// import Password from "antd/es/input/Password";

export default function Registration({ name }) {

  const dataUser = [];
  
  let login = '';
  let password = '';

  const getLogin = (e) => {
    login = e.target.value;
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

        <Button color="default" variant="solid" className="registration_btn" onClick={sendHandler}>
            Регистрация
          </Button>
      </form>
    </div>
  );
}
