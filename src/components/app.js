import React, { Component } from 'react';
import Timer from "./timer";
import Timer02 from "./timer02";

export default class App extends Component {
  render() {
    return (
      <div>React simple Timer!
      <Timer />
      <Timer02 />
      </div>
    );
  }
}
