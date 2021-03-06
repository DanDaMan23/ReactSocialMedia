import React from 'react';

import {PostProps} from '../../postInterface';

import Post from './Post/post';

interface PostsProps {
    allPosts: PostProps[];
    deletePost: (postId: string) => void;
}



const Posts: React.FC<PostsProps> = props => {
    return (
        <div>
            <ul className="list-group">
                {props.allPosts.map(post => <Post post={post} deletePost={props.deletePost} />)}
            </ul>
        </div>
    );
};

export default Posts;