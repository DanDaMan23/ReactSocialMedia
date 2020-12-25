import React from 'react';

import {PostProps} from '../../postInterface';

interface PostsProps {
    allPosts: PostProps[];
}

const Posts: React.FC<PostsProps> = props => {

    return (
        <div>
            <ul className="list-group">
                {props.allPosts.map(post =>
                    (<li className="list-group-item" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default Posts;