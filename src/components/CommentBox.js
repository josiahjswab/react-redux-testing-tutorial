import React from 'react';

export default class CommentBox extends React.Component {
    state = {comment: ''};
    
    handleChange = event => {
        this.setState({comment: event.target.value});
    };
    
    handleSubmit = event => {
        event.preventDefault(); // Keeps our form from submitting itself.
        
        //Call an action creator

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} type='text' />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
};