import React from 'react';

import {PostProps} from '../../postInterface';

import Post from './Post/post';

interface PostsProps {
    allPosts: PostProps[];
    deletePost: (postId: string) => void;
    addComment: (postId: string, username: string, comment: string) => void;
}

const Posts: React.FC<PostsProps> = props => {
    return (
        <div>
            <ul className="list-group">
                {props.allPosts.map(post => (
                    <Post key={post.id} post={post} deletePost={props.deletePost} addComment={props.addComment} />
                ))}
            </ul>
        </div>
    );
};

export default Posts;