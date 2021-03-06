import { Modal, Input } from 'antd'
import { FormLayoutDemo } from './FormLayoutDemo'
const ModalComponent = props => {
  return (
    <Modal
      title={props.text}
      visible={props.isModalVisible}
      onCancel={props.handleCancel}
      footer={props.footer}
    >
      <a>{props.message}</a>
      <FormLayoutDemo />
    </Modal>
  )
}

export default ModalComponent
