import React , {Component} from 'react'
import {Row,Col} from 'antd';
import IndexMenu from './indexMenu';
import IndexList from './list';

export default class Index extends Component {
  render(){
    let tab = this.props.match.params.id;
    return (
      <Row className="wrap">
        <Col xl={4} lg={6} md={6} xs={0} className="indexSlider" mode="vertical">
          <IndexMenu id="indexMenu" mode="vertical" />
        </Col>
        <Col xl={0} lg={0} md={0} xs={24}>
          <IndexMenu id="indexXsMenu" mode="horizontal" />
        </Col>
        <Col xl={20} lg={18} md={18} xs={24} className="indexList">
          <IndexList 
            tab={tab}
          />
        </Col>
      </Row>
    )
  }
}