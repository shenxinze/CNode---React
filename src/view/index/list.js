import React,{Component} from 'react';
import {List,Avatar} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TxtTag from '../txtTag'; 
import axios from 'axios';

class IndexList extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1
    }
    this.getData(this.props.tab);
  }
  getData(tab){
    this.props.dispatch(dispatch=>{
      dispatch({
        type: 'LIST_UPDATA'
      });
      axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.props.page}&limit=15`)
      .then(res=>{
        dispatch({
          type: 'LIST_UPDATA_SUCC',
          data: res.data
        })
      })
      .catch(err=>{
        console.log(err);
        dispatch({
          type: 'LIST_UPDATA_ERROR',
          data: err
        })
      })
    })
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.props.tab != nextProps.tab){
      this.getData(nextProps.tab);
      return false;
    }
    return true;
  }
  render(){
    let {loading,data} = this.props;
    return (
      <List
        loading={loading}
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={['回复：' + item.reply_count,'访问：' + item.visit_count]}
            key={item.id}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={<div><TxtTag data={item} /><Link to={"/details/"+item.id}>{item.title}</Link></div>}
              description={ 
                <p>
                  <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                  <span style={{marginLeft: '5px'}}>发表于：{item.create_at.split('T')[0]}</span>
                </p>
              }
            />
          </List.Item>
        )}
      ></List>
    )
  }
}

export default connect(state=>state.list)(IndexList);
