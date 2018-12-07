import React from 'react';

export class GetFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: 'Hello!' };
  }

  render() {
    return (
      <div>
        <header>
          <h1>TestPage(SPA)</h1>
        </header>
        <div class="flex-container">
        <nav>
          <ul>
            <li><div id ="nav1"></div></li>
            <li><div id ="nav2"></div></li>
            <li><div id ="nav3"></div></li>
          </ul>
        </nav>
        <article>
        <section>
        </section>
        </article>
        <aside>
          <div id="pict"></div>
        </aside>
        <!-- /.flex-container --></div>
        <footer>
          <address>
          このウェブページの作者に連絡を取りたい方は、
          <a href="mailto:info@htmq.com">info@htmq.com</a>までメールをお送りいただくか、
          <a href="../contact/">お問合わせフォーム</a>からメッセージをお送りください。
          </address>
          <p><small>&copy; 2018 hogehoge taro.</small></p>
        </footer>
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