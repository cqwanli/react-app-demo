/**
 * Created by wanli on 2017/12/7.
 */
import './assets/mid-banner.less';
import React, {Component} from 'react';
export default class  extends Component {
  render() {
    return <div className="mid-banner">
      <div className="top-div">
        <div className="mid-banner-item"><img src={require('./assets/id_icon.png')} alt=""/><h5>身份标识</h5></div>
        <div className="mid-banner-item"><img src={require('./assets/level_icon.png')} alt=""/><h5>等级权益</h5></div>
        <div className="mid-banner-item"><img src={require('./assets/birthday_icon.png')} alt=""/><h5>生日权益</h5></div>
      </div>
      <div className="ground-div"></div>
    </div>
  }
}