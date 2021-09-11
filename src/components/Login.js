import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Credential from "./Credentials.json";

import UserContext from "../contexts/UserContext";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [crederrorMessage, setCredErrorMessage] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const onFinish = (values) => {
    console.log(values.email);
    console.log(values.password);
    var Cred = Credential.map((e) => {
      return e;
    });

    if (
      Cred[0].username === values.email &&
      Cred[0].password === values.password
    ) {
      console.log("logged 1");
      setIsAuthenticated(true);
    } else if (
      Cred[1].username === values.email &&
      Cred[1].password === values.password
    ) {
      console.log("logged 2");
      setIsAuthenticated(true);
    } else {
      setCredErrorMessage("Enter valid credentials");
    }
  };
  return isAuthenticated ? (
    <Redirect to="/Dashboard" />
  ) : (
    <div>
      <Row style={{ marginTop: "50px" }}>
        <Col xl={10} lg={14} md={10} sm={24} xs={24} offset={9}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                {" "}
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={5} lg={6} md={10} sm={5} xs={7}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Col>
              <Col xl={10} lg={8} md={10} sm={8}>
                <Form.Item>
                  {" "}
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col xl={7} lg={8} md={12} sm={8}>
                {" "}
                <Form.Item>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                    Or <a href="">register now!</a>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
            {crederrorMessage}
          </Form>
        </Col>
      </Row>
    </div>
  );
}
