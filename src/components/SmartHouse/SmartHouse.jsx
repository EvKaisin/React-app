import "./smarthouse.css";
import closeDoor from "../../img/icons8-door-close(1).png";
import openDoor from "../../img/icons8-door-open.png";
import lampOff from "../../img/icons8-lamp-off.png";
import lampOn from "../../img/icons8-lamp-on.png";
import tvOff from "../../img/icons8-tv-off-64.png";
import tvOn from "../../img/icons8-tv-64.png";
import { useState } from "react";

export default function SmartHouse() {
  const temp = [
    {
      id: 1,
      name: "closeDoor",
      on: true,
      srcOff: closeDoor,
      srcOn: openDoor,
    },
    {
      id: 2,
      name: "lampOff",
      on: true,
      srcOff: lampOff,
      srcOn: lampOn,
    }, 
    {
      id: 3,
      name: "tvOff",
      on: true,
      srcOff: tvOff,
      srcOn: tvOn,
    },

  ];

  const [data, setData] = useState(temp);
  
  const clickHandler = (id) => {
    let tempObj = data[id]
    tempObj.on = !tempObj.on
    let filterData = data.filter((el,i)=> i !==id)
    filterData.push(tempObj)
    filterData.sort((a,b)=> a.id - b.id)
    console.log(filterData);
    
    setData(filterData)
  };

  return (
    <div className="smart_house">
      {data.map((el,i)=>{
        return <img 
        onClick={()=>clickHandler(i)}
        key={el.id}
        src={el.on? el.srcOff : el.srcOn}
        alt="" 
        />
      })}
    </div>
  );
}
