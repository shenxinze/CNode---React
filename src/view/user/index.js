import React , {Component} from 'react'
import {Avatar,Row,Col} from 'antd';
import UserList from './userList';
import {connect} from 'react-redux';
import axios from 'axios';

class User extends Component {
  constructor(props){
    super(props);
    let id = this.props.match.params.id;
    this.getData(id);
  }
  getData(id){
    this.props.dispatch(dispatch=>{
      dispatch({
        type: 'USER_UPDATE'
      })
      axios.get(`https://cnodejs.org/api/v1/user/${id}`)
      .then(res=>{
        dispatch({
          type: 'USER_UPDATE_SUCC',
          data: res.data
        })
      })
      .catch(err=>{
        dispatch({
          type: 'USER_UPDATE_ERROR',
          data: err
        })
      })
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    let id = this.props.match.params.id;
    let nextId = nextProps.match.params.id;
    if(id !== nextId){
      this.getData(nextId);
      return false;
    }
    return true;
  }
  render(){
    let {loading,data} = this.props;
    let {avatar_url,loginname,create_at,score,recent_topics,recent_replies} = data;
    return (
      <div className="wrap">
        <Avatar src={avatar_url} className="userAvatar" />
        <Row className="userInfo">
          <Col md={8}>用户名：<span className="color">{loginname}</span></Col>
          <Col md={8}>积分：<span className="color">{score}</span></Col>
          <Col md={8}>注册时间： <span className="color">{create_at.split('T')[0]}</span></Col>
        </Row>
        <UserList 
          loading={loading}
          title="最近创建话题"
          data={recent_topics}
        />
        <UserList 
          loading={loading}
          title="最近回复话题"
          data={recent_replies}
        />
      </div>
    )
  }
}


export default connect(state=>state.user)(User);