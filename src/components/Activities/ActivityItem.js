/**
 * Created by wanli on 2017/12/12.
 */
import React, { Component } from 'react';
import "./assets/activity-item.less";
export default class extends Component {
  render() {
    return <div className="activity-item">
      <img src={require("./assets/activity_1.jpg")} alt="" />
      <h5>转盘抽奖</h5>
    </div>
  }
}