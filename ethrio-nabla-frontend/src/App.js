import React from 'react'
import './App.css'
import { Button, Col, Row } from 'antd'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { Modal, Layout, Input } from 'antd'
import { useState } from 'react'
import ModalComponent from './ModalComponent'
import { modalGlobalConfig } from 'antd/lib/modal/confirm'
const { Content } = Layout

const usdcEthPoolAddress = '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926'
const usdcEthPoolAbi = require('./contratos/contrato_a.json')

const ShowUniswapObserveValues = props => {
  const { data, runContractFunction, isFetching } = useWeb3Contract({
    abi: usdcEthPoolAbi,
    contractAddress: usdcEthPoolAddress,
    functionName: props.function_name
  })

  return (
    <div>
      <Button
        type="primary"
        onClick={() => runContractFunction()}
        disabled={isFetching}
      >
        Fetch data
      </Button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  )
}

const App = () => {
  const { authenticate, isAuthenticated, user } = useMoralis()
  const [isVoteModalVisible, setIsVoteModalVisible] = useState(false)
  const [isSubmmitModalVisible, setIsSubmmitModalVisible] = useState(false)

  const showVoteModal = () => {
    setIsVoteModalVisible(true)
  }

  const handleVoteOk = () => {
    setIsVoteModalVisible(false)
  }

  const handleVoteCancel = () => {
    setIsVoteModalVisible(false)
  }
  const showSubmmitModal = () => {
    setIsSubmmitModalVisible(true)
  }

  const handleSubmmitOk = () => {
    setIsSubmmitModalVisible(false)
  }

  const handleSubmmitCancel = () => {
    setIsSubmmitModalVisible(false)
  }

  let body = undefined

  if (!isAuthenticated) {
    body = (
      <>
        <div style={{ textAlign: 'center', minHeight: '100vh' }}>
          <h1>Usuario não autenticado</h1>
        </div>
      </>
    )
  } else {
    body = (
      <>
        <Content style={{ minHeight: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Welcome</h1>
            <h1>{user.get('username')}</h1>
            <p></p>
            <div style={{ textAlign: 'left' }}>
              <Col span={5}>
                <Row>
                  <Col span={12}>
                    <Button type="primary" onClick={showSubmmitModal}>
                      Submeter pitch
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button type="secondary" onClick={showVoteModal}>
                      Participar de votação
                    </Button>
                  </Col>
                </Row>
              </Col>
            </div>
            <ShowUniswapObserveValues function_name="symbol" />
            <p />
            <ShowUniswapObserveValues function_name="name" />
          </div>
        </Content>
        <div style={{ textAlign: 'center' }}>
          <h1>Usuário autenticado</h1>
        </div>
      </>
    )
  }

  return (
    <>
      {body}
      <ModalComponent
        text="Qual sua proposta?"
        isModalVisible={isSubmmitModalVisible}
        handleCancel={handleSubmmitCancel}
      />
      <Modal
        title="Participe de uma votação"
        visible={isVoteModalVisible}
        onCancel={handleVoteCancel}
        footer={null}
      >
        <a>Id da proposta</a>
        <Input placeholder="" />
        <p />
        <Row>
          <Col span={12}>
            <Button type="primary">Aprovar</Button>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button type="primary" danger>
              Reprovar
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default App
