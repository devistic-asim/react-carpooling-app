// src/components/auth/LoginPage.js
import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, message } from "antd";
import userData from "../../data/usersData.json"; // Import user data

const LoginPage = ({ onLogin }) => {
  const onFinish = (values) => {
    const foundUser = userData.users.find(
      (user) =>
        user.username === values.username && user.password === values.password,
    );

    if (foundUser) {
      onLogin({ username: foundUser.username, role: foundUser.role });
    } else {
      message.error("Invalid username or password");
    }
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      style={{ maxWidth: 300, margin: "auto", marginTop: 100 }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
