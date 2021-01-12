import React, { Component } from 'react';
import { Tabs } from 'antd';
import TreeTest from './TreeTest';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs animated={false}>
        <TabPane tab="Tab 1" key="1">
          <TreeTest />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
        <h1>2</h1>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
        <h1>3</h1>
        </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;
