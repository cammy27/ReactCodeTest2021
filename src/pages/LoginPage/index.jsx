import React , {useEffect} from "react";
import { Row,Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../_actions/user.actions";
import { history } from "../../_helpers/history";

const LoginPage = () => {

const dispatch =useDispatch();
useEffect(() => {
if(localStorage.getItem('loggedInUser')){
  history.push('/home-page')
}
},[])
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(userActions.authenticate(values));
        
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return(
        <>
        <div className="login-page">
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </>
    )
}

export default LoginPage;