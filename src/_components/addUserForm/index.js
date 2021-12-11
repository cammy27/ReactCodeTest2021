import React, { useEffect, useState } from "react";

import { Row, Col, Button, Modal, Input, Form, DatePicker } from "antd";

const AddNewUserForm = ({ modalVisibility, setModalVisibility, setNameValue }) => {
    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    const handleSubmit = (val) => {
        console.log("the submit", val);
        const user = {
            user: {
                name: {
                    title: val.title,
                    first: val.first,
                    last: val.last
                },
                email: val.email,
                username: val.username,
                password: val.password,
                dob: val.dob,
                phone: val.phone
            }
        }
        setNameValue(user);
    }
    return (
        <>
            <Modal title="Basic Modal" visible={modalVisibility} footer={null}>
                <Form {...layout} onFinish={handleSubmit} >
                    <Row>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="Title"
                                name="title"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="First Name"
                                name="first"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="Last Name"
                                name="last"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>

                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="DOB"
                                name="dob"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12} style={{ paddingRight: "4px" }}>
                            <Form.Item
                                label="phoneNumber"
                                name="phone"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row style={{ justifyContent: "space-evenly" }}>
                        <span>

                            <Button htmlType="submit" style={{ borderRadius: "10px", backgroundColor: "blue", color: "white" }}>Create User</Button>
                        </span>
                        <span ><Button onClick={setModalVisibility} style={{ borderRadius: "10px", backgroundColor: "white", color: "black" }}>Cancel</Button></span>
                    </Row>
                </Form>
            </Modal>
        </>
    )
}
export default AddNewUserForm;