import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
    return (
        <div className='comment-text'>
        <span className='comment'>{props.comment.text}</span>{' '}
        <span className='user'>-{props.comment.username}</span>
        </div>
    );
};

Comment.PropTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;