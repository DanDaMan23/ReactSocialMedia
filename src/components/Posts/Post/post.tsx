import React, { useContext } from 'react';

import Comments from './Comment/comments';
import NewComment from './Comment/NewComment/NewComment';

interface PostProps {
    post: {id: string, username: string, title: string, description: string, comments: []};
    deletePost: (id: string) => void;
    addComment: (postId: string, username: string, comment: string) => void;
}

const Post: React.FC<PostProps> = props => {




    return (
        <li className="list-group-item" key={props.post.id}>
            <h2>{props.post.username}</h2>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
            <button onClick={props.deletePost.bind(null, props.post.id)} className="btn btn-danger">DELETE POST</button>
            <NewComment addComment={props.addComment} postId={props.post.id} />

            <Comments comments={props.post.comments} />
        </li>
    );
};

export default Post;