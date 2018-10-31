import React , {Component} from 'react'
import PublicCard from '../public_Card';
import data from './data';

export default class About extends Component {
  render(){
    return (
      <PublicCard data={data} />
    )
  }
}