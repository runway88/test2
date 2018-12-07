import React, { Component } from 'react';
 class App extends Component {
  render() {
    return (
      <div className="App">
	      <img src={`${process.env.PUBLIC_URL}/img/hamanako.png`} alt="hamanako" />
      </div>
    );
  }
}
 export default App;