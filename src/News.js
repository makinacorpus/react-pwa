import React, { Component } from 'react';
import { Card } from 'antd';

class App extends Component {
  render() {
    return (
      <Card loading title="Card title" bordered={false}>Card content</Card>
    );
  }
}

export default App;
