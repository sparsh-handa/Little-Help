import React from "react";
import { Form, Input } from "antd";
import { getAntdInputValidation } from "../../utils/helper";


function OrgHospitalform(props) {
  const { type } = props;
  return (
    <>
      <Form.Item
        label={type === "hospital" ? "Hospital Name" : "Organization Name"}
        name={type === "hospital" ? "hospitalName" : "organizationName"}
        rules={getAntdInputValidation()}
      >
        <Input/> 
      </Form.Item>

      <Form.Item name="owner" label="Owner" rules={getAntdInputValidation()}>
      <Input/>
      </Form.Item>
      <Form.Item name="email" label="Email" rules={getAntdInputValidation()}>
      <Input/>
      </Form.Item>
      <Form.Item name="phone" label="Phone" rules={getAntdInputValidation()}>
      <Input/>
      </Form.Item>
      <Form.Item name="password" label="Password" rules={getAntdInputValidation()}>
      <Input type="password"/>
      </Form.Item>
    </>
  );
}

export default OrgHospitalform;