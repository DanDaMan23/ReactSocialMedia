import React, {useState} from 'react';

import Posts from '../components/Posts/Posts';
import NewPost from '../components/Posts/NewPost/newPost';

import {PostProps} from '../postInterface';

const App:React.FC = () => {

  const [posts, setPosts] = useState<PostProps[]>([]);

  const newPostHandler = (title: string, description: string) => {
    setPosts(prevPosts => [...prevPosts, {id: Math.random().toString(), title: title, description: description, comments: []}]);
    console.log(posts);
  }


  return (
    <div className="container">
      <NewPost onNewPost={newPostHandler} />
      <Posts allPosts={posts} />
    </div>
  );
}

export default App;
