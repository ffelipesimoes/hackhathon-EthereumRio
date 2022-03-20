
import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const [descricao, setDescricao] = useState('');
  const [receber, setReceber] = useState('');
  const [tempo, setTempo] = useState('');

  const handleDescricaoChange = event => {
    setDescricao(event.target.value)
  }
  const handleReceberChange = event => {
    setReceber(event.target.value)
  }
  const handleTempoChange = event => {
    setTempo(event.target.value)
  }
  const submitDesc = () => {
    console.log(descricao)
  }
  const submitValue = () => {
    console.log(receber)
  }
  const submitTime = () => {
    console.log(tempo)
  }

  const onClickComplete = () => {
    submitDesc();
    submitTime();
    submitValue();
  }

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
        <Input placeholder="Descreva aqui seu projeto" value={descricao} onChange={handleDescricaoChange}/>
      </Form.Item>
      <Form.Item label="Valor a receber">
        <Input placeholder="" value={receber} onChange={handleReceberChange}/>
      </Form.Item>
      <Form.Item label="Duracao da votacao a partir da submissao">
        <Input placeholder="Em segundos" value={tempo} onChange={handleTempoChange}/>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <div style={{textAlign:'center'}}>
          <Button type="primary" onClick={onClickComplete}>Submit</Button>
        </div>
      </Form.Item>
    </Form>
  );
};