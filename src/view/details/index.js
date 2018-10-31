import React,{Component} from 'react';
import TxtDetails from './txtDetails';
import ReplayList from './replayList';
import data from './data';

export default class Details extends Component {
  render(){
    console.log(data)
    return (
      <div className="wrap">
        <TxtDetails
          loading={false}
          data={data.data}
        />
        <ReplayList
          loading={false}
          replies={data.data.replies}
          replyCount={data.data.reply_count}
        />
      </div>
    )
  }
}