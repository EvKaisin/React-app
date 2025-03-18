import { useState } from "react";

export default function About() {
  const [data, setData] = useState({});
  useState(() => {
    fetch("https://api.github.com/users/EvKaisin")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="card_about">
        <img src={data.avatar_url} alt="avatar" className="avatar" />
        <p>Меня зовут {data.name}</p>
        <p>{(data.bio = "Я обучающийся фронтенд разработчик")}</p>
        <div className="icons">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/city.png"
            alt="city"
          />
          <span>: Киров</span>
        </div>
        <div className="social">
          <p>Связь со мной :</p>
          <a href={data.html_url}>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/github--v1.png"
              alt="github--v1"
            />
          </a>
          <a href="https://t.me/evgenii_ETC">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/telegram.png"
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </>
  );
}
