import React from 'react'

export class Comment extends React.Component {
  render() {
    return(
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        {this.props.children}
      </div>
    );
  }
}

export class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        <h2>Comments</h2>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export class CommentList extends React.Component {
  render() {
    return(
      <div className='commentList'>
        <Comment author='Pete Hunt'>This is one comment</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    );
  }
}

export class CommentForm extends React.Component {
  render() {
    return(
      <div className='commentForm'>
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}