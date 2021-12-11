import React, { useEffect , useState} from "react";
import userActions from "../../_actions/user.actions";
import { Table ,Row, Col, Button,Modal, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import AddNewUserForm from "../../_components/addUserForm/index"

const HomePage = () => {
  const dispatch = useDispatch();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newUserArray, setArray] = useState();
  const [name, setName] = useState();
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
const openModal = () => {
    setModalVisibility(true)
}
const closeModal = () => {
    setModalVisibility(false);
}
const setNameValue =(value) =>{
    console.log("the vale", value);
    setModalVisibility(false)
    dispatch(userActions.addNewUser(value))
}
const searchUsers =(e) => {
 if(e.target.value){
    const newArray = userLists.filter((item) => (
        item.name.toLocaleUpperCase().includes(e.target.value.toLocaleUpperCase()))
        );
      setArray(newArray);
  
    }
    
    
}
  return (
    <>
      <h1 className="homepage-heading"> Hello {authentication.user.username}</h1>
      <Row style={{justifyContent:"flex-end", paddingBottom:"2%"}}>
          <Col span={8}>
          <Input placeholder="Search here" onChange={searchUsers}/>
          </Col>
          <Col span={8} style={{paddingLeft:"2%"}}>
          <Button onClick={openModal}>Add New User</Button>
          </Col>
      </Row>
      {newUserArray ? <Table columns={columns} dataSource={newUserArray}/> :  <Table columns={columns} dataSource={userLists} />}
     
      <AddNewUserForm modalVisibility={modalVisibility} setModalVisibility={closeModal} setNameValue={setNameValue}/>
    </>
  );
};

export default HomePage;
