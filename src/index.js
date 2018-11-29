import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {pg1,SampleList,Hello} from './pg1';
import {Comment,CommentBox,CommentList,CommentForm} from './CommentBox';
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

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);

ReactDOM.render(
  <CommentBox />,
  document.getElementById('cmbox')
);
