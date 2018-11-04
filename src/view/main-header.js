import React,{Component} from 'react';
import {Layout,Row,Col,Divider,Icon,Dropdown,Button} from 'antd';
import {Link} from 'react-router-dom';
import Nav from './nav';

export default class MainHeader extends Component {
  render(){
    return (
      <Layout.Header>
        <Row className="wrap">
          <Col xl={4} lg={6} md={6} xs={24}>
            <h1 id="logo"><Link to='/' className="logo">CNode</Link></h1>
          </Col>
          <Col xl={20} lg={18} md={18} xs={0}>
            <Divider type="vertical" className="headerDivider" />
            <Nav id="nav" mode="horizontal" />
          </Col>
          <Col md={0} xs={24} className="xsNav">
            <Dropdown 
              overlay={
                <Nav id="xsNav" mode="vertical" />
              }
              placement="bottomRight"
              trigger={["click","touchend"]}
            >
              <Button><Icon type="bars"></Icon></Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}