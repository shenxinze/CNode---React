import React , {Component} from 'react'
import {Avatar,Row,Col} from 'antd';
import UserList from './userList';
import data from './data';

export default class User extends Component {
  render(){
    let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data.data;
    return (
      <div className="wrap">
        <Avatar src={avatar_url} className="userAvatar" />
        <Row className="userInfo">
          <Col md={8}>用户名：<a href="javascript:;">{loginname}</a></Col>
          <Col md={8}>积分：<a href="javascript:;">{score}</a></Col>
          <Col md={8}>注册时间： <a href="javascript:;">{create_at.split('T')[0]}</a></Col>
        </Row>
        <UserList 
          loading={false}
          title="最近创建话题"
          data={recent_topics}
        />
        <UserList 
          loading={false}
          title="最近回复话题"
          data={recent_replies}
        />
      </div>
    )
  }
}