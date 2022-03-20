
import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="Descricao">
        <Input placeholder="Descreva aqui seu projeto" />
      </Form.Item>
      <Form.Item label="Valor a receber">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item label="Duracao da votacao a partir da submissao">
        <Input placeholder="Em segundos" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <div style={{textAlign:'center'}}>
          <Button type="primary">Submit</Button>
        </div>
      </Form.Item>
    </Form>
  );
};