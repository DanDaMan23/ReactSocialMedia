import React from 'react';

import {PostProps} from '../../postInterface';

interface PostsProps {
    allPosts: PostProps[];
    deletePost: (postId: string) => void;
}



const Posts: React.FC<PostsProps> = props => {
    return (
        <div>
            <ul className="list-group">
                {props.allPosts.map(post =>
                    (<li className="list-group-item" key={post.id}>
                        <h2>{post.username}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <button onClick={props.deletePost.bind(null, post.id)} className="btn btn-danger">DELETE POST</button>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default Posts;