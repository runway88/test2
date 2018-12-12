import React from 'react';

export class Hello extends React.Component {
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
export class NavBtn extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.mv.handleClick(this.props.mode)}>{this.props.mode}</button>
      </div>
    );
  }
}
export class ModeView extends React.Component {
    constructor(props) {
    super(props);
    this.state = { result: <span>mode err</span> };
  }
  handleClick(mode) {
      var image
      image=<span>x</span> 
      if(mode==="mode1"){
        image = <img src={`${process.env.PUBLIC_URL}/img/hamanako.png`} alt="hamanako" />
      }
      if(mode==="mode2"){
        image = <img src={`${process.env.PUBLIC_URL}/img/muroto.jpg`} alt="muroto" />
      }
      if(mode==="mode3"){
        image = <img src={`${process.env.PUBLIC_URL}/img/カルスト.jpg`} alt="karusuto" />
      }
      this.setState({result:image})
  }
  render() {
    return (
      <div>
        {this.state.result}
      </div>
    );
  }
}

export class SampleList extends React.Component {
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
      <ul>{airportList}</ul>
    );
  }
}