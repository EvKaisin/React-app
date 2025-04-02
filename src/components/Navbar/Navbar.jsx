import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to={"/"} className="link_tag">
        Главная страница
      </Link>
      <Link to={"/reg"} className="link_tag">
        Регистрация
      </Link>
      <Link to={"/about"} className="link_tag">
        Обо мне
      </Link>
      <Link to={"/smarthouse"} className="link_tag">
        Умный дом
      </Link>
      <Link to={"/todo"} className="link_tag">
        Список дел
      </Link>
      
    </div>
  );
}
