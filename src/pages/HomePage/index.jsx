import React, { useEffect } from "react";
import userActions from "../../_actions/user.actions";
import { Table ,Row, Col, Button,Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Content } from "antd/lib/layout/layout";

const HomePage = () => {
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  const { user } = useSelector((state) => state.userReducers);
  useEffect(() => {
    dispatch(userActions.userList());
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: " Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];
console.log("the ", user)
  const userLists =
    user &&
    user.map((details, index) => {
      return {
        key: index,
        name:
          details.user.name.title +
          " " +
          details.user.name.first +
          " " +
          details.user.name.last,
        gender: details.user.gender,
        email: details.user.email,
        username: details.user.username,
        password: details.user.password,
        dob: details.user.dob,
        phoneNumber: details.user.phone,
      };
    });
  return (
    <>
      <h1 className="homepage-heading"> Hello {authentication.user.username}</h1>
      <Row style={{justifyContent:"flex-end", paddingBottom:"2%"}}>
          <Col span={8}>
          <Input placeholder="Search here"/>
          </Col>
          <Col span={8} style={{paddingLeft:"2%"}}>
          <Button>Add New User</Button>
          </Col>
      </Row>
      <Table columns={columns} dataSource={userLists} />
    </>
  );
};

export default HomePage;
