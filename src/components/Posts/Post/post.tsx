import React from 'react';

interface PostPorps {
    id: string;
    title: string;
    description: string;
    comments: {id: string, comments: string}[];
}

const Post: React.FC<PostPorps> = props => {
    return (
        <div>

        </div>
    );
};

export default Post;