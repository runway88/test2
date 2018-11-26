import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 class pg1 extends Component {
  render() {
    return (
      <div className="pg1">
        pg1 test 14:57 2018/11/26
      </div>
    );
  }
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: 'Hello!' };
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.setState({msg: 'Bye!'})}>Click</button>
      </div>
    );
  }
}

class SampleList extends React.Component {
  render() {
    const airports = [
      { name: "MATSUSHIMA", legion: "TOUHOKU" },
      { name: "KOMATSU", legion: "HOKURIKU" },
      { name: "HYAKURI", legion: "KANTO" }
    ];
    const airportList = airports.map((airport, index) =>
      <li key={index}>{airport.name} (Legion: {airport.legion})</li>
    );
    return (
      <ul>{airports}</ul>
    );
  }
}

 export default pg1;