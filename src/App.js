import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";

// state는 객체이다 , props는 읽기전용으로 불변의 데이터이지만
// state 는 동적인데이터로 데이터수정이 가능하다.
// 따라서 state에는 바꾸고 싶은 데이터를 넣는다

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Number {this.state.count}</h1>
        <button
          onClick={function () {
            //this.setState({ count: this.state.count + 1 }); //!! count 변수를 그냥쓰지않고 this를 꼭 써준다 count는 객체이기때문
            this.setState((current) => ({ count: current.count + 1 }));
          }.bind(this)}
        >
          add
        </button>
        <button
          onClick={function () {
            //this.setState({ count: this.state.count - 1 });
            this.setState((current) => ({ count: current.count - 1 }));
          }.bind(this)}
        >
          minus
        </button>
      </div>
    );
  }
}

export default App;
