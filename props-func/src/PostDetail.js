import React from 'react';

const PostDetail = (props) => {

    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avator" src={props.src}></img>
                
            </a>
            <div className="content">
                <a href="/" className="author">
                   {props.author}
                    {/* Thilak */}
                </a>
            </div>
            <div className="metadata">
                <span className="date">
                   {props.timeAgo}

                </span>
            </div>
            <div className="text">
               {props.comment}

            </div>
        </div>

    )
}


export default PostDetail;