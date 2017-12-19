/**
 * Created by wanli on 2017/12/12.
 */
import React, {Component} from 'react';
import TaskItem from './TaskItem';
import "./assets/index.less";
/**
 * 成长任务模块
 */
export default class extends Component{
  render(){
    return <div className="grow-task">
      <div className="grow-task-banner">
        <b>成长任务</b>
        <a href="#">查看全部 ></a>
      </div>
      <div className="task-container">
        <TaskItem/>
        <TaskItem/>
      </div>
    </div>
  }
}