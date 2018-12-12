import React from 'react';

export class PageChangeBtn extends React.Component {
    render() {
      return (
        <div>
          <button onClick={()=>this.props.pv.handleClick(this.props.page)}>{this.props.page}</button>
        </div>
      );
    }
  }

  export class PageView extends React.Component {
    constructor(props) {
    super(props);
    this.state = { result: <span>mode err</span> };
  }
  handleClick(page) {
      var pagedata
      pagedata=<span>x</span> 
      if(page==="pg1"){
        pagedata = 
        <div>
           <article>
           <section>
               page1-TEST
           </section>
           </article>
        </div>
      }
      else {
        pagedata = 
        <div>
           <article>
           <section>
              <div id="d3">test</div>
              <div id="root"></div>
              <div id="test"></div>
              <div id="list"></div>
              <div id="hello"></div>
              <div id="cmbox"></div>
            </section>
            </article>
        </div>
      }
      this.setState({result:pagedata})
  }
  render() {
    return (
      <div>
        {this.state.result}
      </div>
    );
  }
}