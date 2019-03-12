import React,{Component} from "react";
import {Link} from "react-router-dom"
import {Layout,Row,Col,Divider,Menu} from "antd"

class MainHeader extends Component {
  render (){
    return (
      <Layout.Header>
        <Row className="wrap">
          <Col md={6} xs={24}>
            <h1 id="logo">header</h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type="vertical" className="headerDivider"></Divider>
            <Menu mode="horizontal">
              <Menu.Item>
                <Link to="/index">首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/book">教程</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

export default MainHeader