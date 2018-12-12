import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SampleList,Hello,NavBtn,ModeView} from './pg1';
import {PageChangeBtn,PageView} from './pg2';
import {CommentBox} from './CommentBox';

ReactDOM.render(
  <App />,
  document.getElementById('d3')
);
const modeview = ReactDOM.render(
  <ModeView />,
  document.getElementById('pict')
);
ReactDOM.render(
  <NavBtn mode="mode1" mv={modeview}/>,
  document.getElementById('nav1')
);
ReactDOM.render(
  <NavBtn mode="mode2" mv={modeview}/>,
  document.getElementById('nav2')
);
ReactDOM.render(
  <NavBtn mode="mode3" mv={modeview}/>,
  document.getElementById('nav3')
);
const pageview = ReactDOM.render(
  <PageView />,
  document.getElementById('pg')
);
ReactDOM.render(
  <PageChangeBtn page="pg1" pv={pageview}/>,
  document.getElementById('nav4')
);
ReactDOM.render(
  <PageChangeBtn page="pg2" pv={pageview}/>,
  document.getElementById('nav5')
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

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);

var data = [
  {author: 'Pete Hunt', text: 'This is one comment'},
  {author: 'Jordan Walke', text: 'This is *another* comment'}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('cmbox')
);
