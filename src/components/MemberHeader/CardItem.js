/**
 * Created by wanli on 2017/12/6.
 */
import React, {Component} from 'react';
import './assets/card-item.less';
export default class  extends Component {
  render() {
    return <div>
      {this.props.num && <div className="card-item-1">
        <b>{this.props.num}</b>
        <span>{this.props.text}</span>
        <div className="delta"></div>
      </div>}
      {!this.props.num && <div className="card-item-2">
         <b>{this.props.text}</b>
        <div className="delta"></div>
      </div>}
    </div>;
  }
}