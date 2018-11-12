import React , {Component} from 'react'
import {Card,Avatar} from 'antd';
import TxtTag from '../txtTag'; 
import {Link} from 'react-router-dom';

export default class TxtDetails extends Component {
  render(){
    let {loading,data} = this.props;
    const title = (<div>
      <h2>{data.title}</h2>
      <div
        style={{display:'flex',alignItems:'center'}}
      >
        <TxtTag data={data} />
        <Avatar src={data.author.avatar_url}></Avatar>
        <Link to={"/user/"+data.author.loginname} style={{margin: '0 10px'}}>{data.author.loginname}</Link>
        发表于 {data.create_at.split('T')[0]}
      </div>
    </div>)
    return (
      <Card
        loading={loading}
        title={title}
      >
        <div
          dangerouslySetInnerHTML={{__html: data.content}}
        ></div>
      </Card>
    )
  }
}