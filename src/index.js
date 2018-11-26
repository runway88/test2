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

class SampleList extends React.Component {
  render() {
    const airports = [
      { name: "MATSUSHIMA", legion: "TOUHOKU" },
      { name: "KOMATSU", legion: "HOKURIKU" },
      { name: "HYAKURI", legion: "KANTO" }
    ];
    const airportList = airport.map((airport, index) =>
      <li key={index}>{airport.name} (Legion: {airport.legion})</li>
    );
    return (
      <ul>{airports}</ul>
    );
  }
}