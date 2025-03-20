export default function Navbar({formHandler , aboutHandler}) {
  return (
    <div className="navbar">
       <p onClick={formHandler} className="link_tag">Регистрация</p>
        <p onClick={aboutHandler} className="link_tag">Обо мне</p>
    </div>
  )
}
