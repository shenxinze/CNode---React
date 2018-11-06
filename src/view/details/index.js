import React,{Component} from 'react';
import TxtDetails from './txtDetails';
import ReplayList from './replayList';
import {connect} from 'react-redux';
import axios from 'axios';

class Details extends Component {
  constructor(props){
    super(props);
    let id = this.props.match.params.id;
    this.getData(id);
  }
  getData(id){
    this.props.dispatch(dispatch=>{
      dispatch({
        type: 'DETAILS_UPDATE'
      })
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res=>{
        dispatch({
          type: 'DETAILS_UPDATE_SUCC',
          data: res.data
        })
      })
      .catch(err=>{
        dispatch({
          type: 'DETAILS_UPDATE_ERROR',
          data: err
        })
      })
    })
  }
  render(){
    let {loading,data} = this.props;
    return (
      <div className="wrap">
        <TxtDetails
          loading={loading}
          data={data}
        />
        <ReplayList
          loading={loading}
          replies={data.replies}
          replyCount={data.reply_count}
        />
      </div>
    )
  }
}

export default connect(state=>state.details)(Details)