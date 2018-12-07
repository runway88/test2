import React from 'react'
import Marked from 'marked'

export class Comment extends React.Component {
  render() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
    return(
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}

export class CommentBox extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

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
    var commentNodes = this.props.data.map((comment)=> {
      return(<Comment author={comment.author}>{comment.text}</Comment>);
    });
    return(<div className='commentList'>{commentNodes}</div>);
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