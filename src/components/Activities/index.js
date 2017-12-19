/**
 * Created by wanli on 2017/12/12.
 */
import React, { Component } from 'react';
import "./assets/index.less";
import ActivityItem from "./ActivityItem";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { awardMsgItemLiNum: 0 };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.awardMsgItemLiNum < this.refs.msgUl.children.length - 1) {
        this.setState(Object.assign({}, this.state, { awardMsgItemLiNum: this.state.awardMsgItemLiNum + 1 }));
      }
      else {
        this.setState(Object.assign({}, this.state, { awardMsgItemLiNum: 0 }));
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let ulStyle = {
      marginTop: `${-0.9 * this.state.awardMsgItemLiNum}rem`,
      transition: `margin-top .5s ease-in-out .1s`
    };
    if (this.state.awardMsgItemLiNum === 0) {
      delete ulStyle.transition;
    }
    return <div className="activities">
      <div className="activity-banner">
        <img src={require("./assets/laba.png")} alt="" />
        <div className="activity-msg">
          <ul ref="msgUl" style={ulStyle}>
            <li>大转盘抽奖消耗5积分</li>
            <li>大转盘抽奖消耗5积分1</li>
            <li>大转盘抽奖消耗5积分2</li>
          </ul>
        </div>
        <div className="notice-point"></div>
        <div className="arrow"></div>
      </div>
      <div className="activities-container">
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
        <ActivityItem />
      </div>
    </div>
  }
}