// SignupForm.js

import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import styles from './SignupForm.module.css'; // Make sure to import your CSS file
import countryData from './countryData.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const { Option } = Select;

const SignupForm = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState();

  const onFinish = (values) => {
    alert(JSON.stringify(values));
    form.resetFields();
  };

  const handleCountryCodeChange = (value, option) => {
    const selectedCountry = option.data;
    form.setFieldsValue({ phone: `+${selectedCountry.code}` });
  };

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Cloud Pro AI Registration</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              className={styles.formItem}
              name="firstName"
              label="First Name"
              required
              rules={[{ required: true, message: 'Please enter First Name' }]}
            >
              <Input className={styles.input} placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className={styles.formItem}
              name="lastName"
              label="Last Name"
              required
              rules={[{ required: true, message: 'Please enter Last Name' }]}
            >
              <Input className={styles.input} placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          className={styles.formItem}
          name="email"
          label="Company Email"
          required
          rules={[{ required: true, message: 'Please enter Company Email' }]}
        >
          <Input className={styles.input} type="email" placeholder="Company Email" />
        </Form.Item>
        <Form.Item
          className={styles.formItem}
          name="companyName"
          label="Company Name"
          required
          rules={[{ required: true, message: 'Please enter Company Name' }]}
        >
          <Input className={styles.input} placeholder="Company Name" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              className={styles.formItem}
              name="jobTitle"
              label="Job Title"
              required
              rules={[{ required: true, message: 'Please enter Job Title' }]}
            >
              <Input className={styles.input} placeholder="Job Title" />
            </Form.Item>
          </Col>
          <Col span={12}>
            
          </Col>
        </Row>
        <Form.Item
              className={styles.formItem}
              name="phone"
              label="Phone No."
              required
              rules={[
                { required: true, message: 'Please enter Phone No.' },
                { pattern: /^\d{10}$/, message: 'Phone number should be 10 digits' },
              ]}
            >
              <PhoneInput
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                country={'us'}
                value={value}
                onChange={(val) => {
                  setValue(val);
                  form.setFieldsValue({ phone: val });
                }}
              />
            </Form.Item>
        <Form.Item
          className={styles.formItem}
          name="subscribeNewsletter"
          valuePropName="checked"
        >
          <Checkbox className={styles.checkbox}>Subscribe to Our Newsletter</Checkbox>
        </Form.Item>
        <Form.Item className={styles.formItem} label="Follow our LinkedIn Page">
          <a href="https://www.linkedin.com/company/cloudproai/mycompany/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined className={styles.linkedInLogo} />
          </a>
        </Form.Item>
        <Form.Item className={styles.formItem}>
  <Checkbox className={styles.agreeCheckbox} />
  <span className={styles.agreeText}>
    By submitting, I agree to the processing of my personal data by Cloud Pro AI
    in accordance with our Privacy Policy. I understand I can update my preferences at any time.
  </span>
</Form.Item>
        <Form.Item className={styles.formItem}>
          <Button htmlType="submit" type="primary" className={styles.registerButton}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
