import React from 'react'
import './App.css'
import { Button, Col, Row } from 'antd'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { Modal, Layout, Input } from 'antd'
import { useState } from 'react'
import ModalComponent from './ModalComponent'
import { modalGlobalConfig } from 'antd/lib/modal/confirm'
import PageComponent from './PageComponent'
import { FormLayoutDemo } from './FormLayoutDemo'
import ModalSimpleComponent from './ModalSimpleComponent'
import background from './item2.png'

const { Content } = Layout

const usdcEthPoolAddress = '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926'
const usdcEthPoolAbi = require('./contratos/contrato_a.json')

const contrato_a = '0xf5f3aE8c51cAE90E68092fDD22740D1ad73d8075'
const contrato_a_abi = require('./contratos/contrato_b.json')

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

const PingNossoSmart = props => {
  const { data, runContractFunction, isFetching } = useWeb3Contract({
    abi: contrato_a_abi,
    contractAddress: contrato_a,
    functionName: props.function_name
  })

  return (
    <div>
      <Button
        type="primary"
        onClick={() => runContractFunction()}
        disabled={isFetching}
      >
        Ping para contrato
      </Button>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  )
}

const App = () => {
  const handleChange = (event) =>{
    setEthValue(event.target.value);
  }
  const DepositaValor = () =>{
    console.log(ethValue);
  }
 
 
  const { authenticate, isAuthenticated, user } = useMoralis()
  const [isVoteModalVisible, setIsVoteModalVisible] = useState(false)
  const [isSubmmitModalVisible, setIsSubmmitModalVisible] = useState(false)
  const [isDonationModalVisible, setIsDonationModalVisible] = useState(false)
  const [ethValue, setEthValue] = useState(undefined)

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

  const showDonationModal = () => {
    setIsDonationModalVisible(true)
  }

  const handleDonationOk = () => {
    setIsDonationModalVisible(false)
  }

  const handleDonationCancel = () => {
    setIsDonationModalVisible(false)
  }

  let body = undefined

  if (!isAuthenticated) {
    body = (
      <>
        <div style={{ minHeight: '100vh' }}>
          <img className="background" src={background}></img>
          <h2 style={{ textAlign: 'center' }}>
            <font size="+3">Titulo pica</font>
          </h2>
          <p />
          <h1 style={{ textAlign: 'left' }}>
            <font size="+3">Membros</font>
          </h1>
          <em style={{ textAlign: 'left' }}>
            <Col span={12}>
              <font className="mainText" size="+1">
                Somos a 1° organização descentralizada e autônoma (DAO) liderada
                por estudantes em toda América Latina. Ajudamos universitários a
                conseguirem fundos para seus projetos de pesquisa,
                desenvolvimento e negócios.
              </font>
            </Col>
            <p />
            <Col span={12}>
              {/* <font className="mainText" size="+1">
                Discentes das mais diversas universidades formam nosso
                ecossistema, onde a voz de cada membro é ouvida em cada decisão
                e a transparência é pilar fundamental de cada processo, sendo
                que todos financiamentos são colocados para votação da
                comunidade.
              </font> */}
            </Col>
          </em>
          <h1 style={{ textAlign: 'left' }}>
            <font size="+3">Investidores</font>
          </h1>
          <em style={{ textAlign: 'left' }}>
            <Col span={12}>
              <font className="mainText" size="+1">
                Investir na universiDAO é catalisar o futuro dos estudantes
                brasileiros e ajudar a construir um amanhã que queremos viver,
                onde os problemas de hoje são somente histórias.
              </font>
            </Col>
            <p />
            <Col span={12}>
              <font className="mainText" size="+1">
                Investimos todo o capital recebido para financiar projetos de
                P&D e negócios de estudantes das mais diversas universidades
                brasileiras que estão ajudando a causar impacto positivo através
                de soluções web3
              </font>
            </Col>
            <p />
            <p />
          </em>
          <PageComponent align="center" />
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
              <Col span={8}>
                <Row>
                  <Col span={8}>
                    <Button type="primary" onClick={showSubmmitModal}>
                      Submeter pitch
                    </Button>
                  </Col>
                  <Col span={8}>
                    <Button type="primary" onClick={showDonationModal}>
                      Doar para DAO
                    </Button>
                  </Col>
                  <Col span={8}>
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
            <PingNossoSmart function_name="getBalance" />
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
        footer={null}
      />
      <ModalSimpleComponent
        text="Qual a quantia a ser doada?"
        isModalVisible={isDonationModalVisible}
        handleCancel={handleDonationCancel}
      />
      <Modal
        title="Participe de uma votação"
        visible={isVoteModalVisible}
        onCancel={handleVoteCancel}
        footer={null}
      >
        <a>Id da proposta</a>
        <Input placeholder="" value={ethValue} onChange={handleChange} />
        <p />
        <Row>
          <Col span={12}>
            <Button type="primary"  onClick={DepositaValor}>Aprovar</Button>
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
