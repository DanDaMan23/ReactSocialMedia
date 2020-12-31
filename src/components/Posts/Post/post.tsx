import React from 'react';

interface PostPorps {
    post: {id: string, username: string, title: string, description: string};
    deletePost: (id: string) => void;
}

const Post: React.FC<PostPorps> = props => {
    return (
        <li className="list-group-item" key={props.post.id}>
            <h2>{props.post.username}</h2>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
            <button onClick={props.deletePost.bind(null, props.post.id)} className="btn btn-danger">DELETE POST</button>
        </li>
    );
};

export default Post;