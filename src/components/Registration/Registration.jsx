import { Button } from "antd";

export default function Registration({ name }) {
  return (
    <div>
      <form className='registration_field'>
        <p>Логин:</p>
        <input type="login" />
        <p>Пароль:</p>
        <input type="password" />
        <Button color="default" variant="solid" className="registration_btn">
            Регистрация
          </Button>
      </form>
    </div>
  );
}
