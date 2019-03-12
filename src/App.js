import React, { Component } from 'react';
import RouterIndex from "./router/index";
import MainHeader from "./view/main-header.js";
import MainFooter from "./view/main-footer.js";
import "antd/dist/antd.css"
import "./view/index.css"
class App extends Component {
  render() {
    return <div className="pageWrap">
      <MainHeader></MainHeader>
      <MainFooter></MainFooter>
    </div>;
  }
}

export default App;
