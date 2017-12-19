import React, { Component } from 'react';
import MemberHeader from './components/MemberHeader';
import GrowTask from './components/GrowTask';
import Activities from "./components/Activities";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        headPortraitsUrl: "",
        telephone: 18856786688,
        growthValue: 240,
        integral: 1267,
        level: "LV5"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <MemberHeader userinfo={this.state.userinfo} />
        <GrowTask />
        <Activities />
      </div>
    );
  }
}

export default App;
