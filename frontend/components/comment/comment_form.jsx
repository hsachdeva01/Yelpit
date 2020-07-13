import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content: '',
      review_id: this.props.reviewId,
      user_id: this.props.userId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.state)
      .then(() => this.setState({content: ''}));
  };

  update(){
    return e => this.setState({content: e.currentTarget.value})
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="comment-form">
        {console.log(this.props)}
        <div className="comment-body">
          <textarea 
            value={this.state.content}
            placeholder="Write a comment..."
            onChange={this.update()}
          />
          <input type="submit"
          value="Submit"
          disabled={this.state.content === ''}
          className="comment-submit"
          />
        </div>
      </form>
    )
  }
}



export default CommentForm;