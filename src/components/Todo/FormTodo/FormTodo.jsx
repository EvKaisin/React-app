import { Button, Checkbox, Form, Input } from "antd";
import "./formtodo.css";

export default function FormTodo({el , onFinish}) {

  return (
    <div>
      <Form onFinish={onFinish} className="FormToDo">

        <Form.Item name={"id"} hidden initialValue={el.id}>
          <Input />
        </Form.Item>

        <Form.Item
          name={"checked"}
          valuePropName="checked"
          initialValue={el.completed}
        >
          <Checkbox></Checkbox>
        </Form.Item>

        <Form.Item name={"title"} label="" initialValue={el.todo}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">X</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
