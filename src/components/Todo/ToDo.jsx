import { Button, notification ,  } from "antd";
import "./todo.css";
import FormTodo from "./FormTodo/FormTodo";
import { useEffect, useState } from "react";

export default function ToDo() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => setData(data.todos.slice(25)));
  }, []);

  
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    type === 'error' && api['error']({
      message: 'Error',
      duration: 1,
      description:
        'Вы не можете звкрыть задачу пока не выполнили ее',
    });
    type === 'success' &&  api['success']({
      message: 'Success',
      duration: 1,
      description:
        'Добавлена новая задача'
    })
  };

  const onFinish = (values) => {
    console.log(values)
    if(values.checked){
      setData((prevState)=>prevState.filter((el)=> el.id !== values.id) )
    } else {
      openNotificationWithIcon ('error')
    }
  };

  const emptyTodo = {
    id: data.length + 1,
    checked : data.checked,
    title: ''
  }

  const addTodo = ()=>{
    setData([...data, emptyTodo]) // (копирую старый массив ...data) и добавляю новый 
    openNotificationWithIcon ('success')
  }

  return (
    <div className="todo_container">
      <Button onClick={addTodo}>Добавить</Button>
      {data.map((el) => {
        return <FormTodo 
        onFinish={onFinish}
        key={el.id} 
        el={el}
        />;
      })}
      {contextHolder}
    </div>
  );
}
