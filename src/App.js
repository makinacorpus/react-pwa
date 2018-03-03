import React, { Component } from 'react';
import { Layout, Menu, Col, Row } from 'antd';

import News from './News'

import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Newsfeed</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }} theme="dark">
          <div style={{ padding: '30px' }}>
            <Row gutter={16}>
              <Col span={32} md={12} lg={8} style={{paddingTop: 8, paddingBottom: 8}}>
                <News />
              </Col>
              <Col span={32} md={12} lg={8} style={{paddingTop: 8, paddingBottom: 8}}>
                <News />
              </Col>
              <Col span={32} md={12} lg={8} style={{paddingTop: 8, paddingBottom: 8}}>
                <News />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
