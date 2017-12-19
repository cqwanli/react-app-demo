/**
 * Created by wanli on 2017/12/12.
 */
import React, {Component} from 'react';
import "./assets/task-item.less";
export default class extends Component{
  render(){
    return <div className="task-item">
      <div className="task-item-info">
        <h5>观看摄像头直播或回放</h5>
        <p>每观看1分钟获得0.2积分,2成长值</p>
      </div>
      <a href="#" className="task-item-btn">去观看</a>
    </div>
  }
}