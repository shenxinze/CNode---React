import React,{Component} from 'react';
import {Tag} from 'antd';
import tab from './tab';

let getTab = (data)=>{
  let nowTab = (data.top?'top':data.good?'good':data.tab);
  return tab.filter(item=> item.tab === nowTab)[0];
}
export default class TxtTag extends Component {
  render(){
    let nowTab = getTab(this.props.data);
    return (
      <Tag color={nowTab.color}>{nowTab.txt}</Tag>
    )
  }
}