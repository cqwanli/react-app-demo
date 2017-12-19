/**
 * Created by wanli on 2017/12/6.
 */
import React, { Component } from 'react';
import CardItem from './CardItem';
import MidBanner from './MidBanner';
import './assets/member-header.less';
const cardStyle = {
  LV1: {
    background: `linear-gradient(139deg, #f3c7a1, #e87975)`
  },
  LV2: {
    background: `linear-gradient(139deg, #a2a5b0, #d0d1d9)`
  },
  LV3: {
    background: `linear-gradient(139deg, #d0ac73 9%, #f5cea8 100%)`
  },
  LV4: {
    background: `linear-gradient(139deg, #20c5b5 9%, #77c1e6 100%)`
  },
  LV5: {
    background: `linear-gradient(139deg, #899ef5 9%, #c6aafa 100%)`
  },
  LV6: {
    background: `linear-gradient(139deg, #a98420, #efbd70)`
  }
}
const levelName = {
  LV1: "大众会员",
  LV2: "白银会员",
  LV3: "黄金会员",
  LV4: "铂金会员",
  LV5: "钻石会员",
  LV6: "至尊会员",
}
/**
 * 和目会员头部
 */
export default class extends Component {
  render() {
    return (
      <div className="member-header">
        <div className="header-banner">
          <div className="go-back"></div>
          <div className="member-help">?</div>
          <h1>和目会员</h1>
        </div>
        <div className="clear"></div>
        <div className="member-info">

            <div className="member-card" style={cardStyle[this.props.userinfo.level]}>
              <div className="card-line-1">
                <img src={require('./assets/hd_pic.png')} alt="" />
                <b>{this.props.userinfo.telephone}</b>
                <i>{this.props.userinfo.level}</i>
              </div>
              <div className="card-line-2">
                <CardItem num={this.props.userinfo.growthValue} text="成长值" />
                <CardItem num={this.props.userinfo.integral} text="积分" />
                <CardItem text="历史记录" />
              </div>
              <div className="card-line-3">
                <b>{levelName[this.props.userinfo.level]}</b>
              </div>
            </div>
        </div>
        <MidBanner />

      </div>
    );
  }
}