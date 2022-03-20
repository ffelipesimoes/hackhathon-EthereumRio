import {Modal, Input} from 'antd';
const ModalComponent = (props) => {
    return(
        <Modal title={props.text}
            visible={props.isModalVisible}
            onCancel={props.handleCancel}
            footer={props.footer}>
            <a>{props.message}</a>
            <Input placeholder="" />
        </Modal>
    )
}

export default ModalComponent;