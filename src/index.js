import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('d3')
);

ReactDOM.render(
  <h1>root 16:34 2018/11/26</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>test 16:35 2018/11/26</h1>,
  document.getElementById('test')
);

ReactDOM.render(
  <SampleList />,
  document.getElementById('list')
);

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