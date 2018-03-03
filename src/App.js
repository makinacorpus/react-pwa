import React, { Component } from 'react';
import { Layout, Menu , Row, Col } from 'antd';

import Api from './Api';
import { NewsList } from './News'

import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{}, {}, {}]
    }
  }

  componentDidMount() {
    Api.getAll().then(articles => {
      this.setState({articles: articles})
    })
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Newsfeed</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Row type="flex" justify="center">
            <Col style={{ padding: '20px' }} span={24} lg={20}>
              <NewsList articles={this.state.articles} />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
