import React, { useState } from 'react'
import App from './App'
import PageComponent from './PageComponent'
import { Layout } from 'antd'

const { Header, Content } = Layout

const AuthHeader = props => {
  return (
    <Layout>
      <Header>
        <PageComponent align="right" />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <App />
      </Content>
    </Layout>
  )
}

export default AuthHeader
