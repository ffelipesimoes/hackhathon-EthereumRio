import { Modal, Input } from 'antd'
import { FormLayoutDemo } from './FormLayoutDemo'
const ModalSimpleComponent = props => {
  return (
    <Modal
      title={props.text}
      visible={props.isModalVisible}
      onCancel={props.handleCancel}
      footer={props.footer}
      onOk={props.onOk}
    >
      <a>{props.message}</a>
      <Input placeholder="" onChange={props.onChange} value={props.value} />
    </Modal>
  )
}

export default ModalSimpleComponent
