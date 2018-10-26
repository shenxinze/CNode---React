import React , {Component} from 'react'
import {Row,Col} from 'antd';
import IndexMenu from './indexMenu';

let arr = [];
for(var i = 0; i < 100; i++){
  arr.push(<li>这是第{i}个li</li>)
}
class Index extends Component {
  render(){
    return (
      <Row className="wrap">
        <Col xl={4} lg={6} md={6} xs={0} className="indexSlider" mode="vertical">
          <IndexMenu id="indexMenu" mode="vertical" />
        </Col>
        <Col xl={0} lg={0} md={0} xs={24}>
          <IndexMenu id="indexXsMenu" mode="horizontal" />
        </Col>
        <Col xl={20} lg={18} md={18} xs={24} className="indexList">
          {arr}
        </Col>
      </Row>
    )
  }
}

export default Index