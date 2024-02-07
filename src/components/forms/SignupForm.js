import React from 'react';
import { Form, Input, Button } from 'antd';

const Signup = () => {
  const [form] = Form.useForm(); // Use Form.useForm() instead of useForm

  const onFinish = (values) => {
    alert(JSON.stringify(values));
    form.resetFields(); // Reset the form fields
  };

  return (
    <div>
      <h1 className="title">Signup Component</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="firstName"
          label="First Name"
          required
          rules={[{ required: true, message: 'Please enter First Name' }]}
        >
          <Input type="text" placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          required
          rules={[{ required: true, message: 'Please enter Last Name' }]}
        >
          <Input type="text" placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          required
          rules={[{ required: true, message: 'Please enter Email' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Mobile Number"
          required
          rules={[
            { required: true, message: 'Please enter Mobile Number' },
            { pattern: /^\d{10}$/, message: 'Phone number should be 10 digits' },
          ]}
        >
          <Input type="number" placeholder="Mobile Number" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          required
          rules={[{ required: true, message: 'Please enter Password' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="registerButtonStyle">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
