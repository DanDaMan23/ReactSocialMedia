import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Posts from '../components/Posts/Posts';
import NewPost from '../components/Posts/NewPost/newPost';
import NavBar from './NavBar';

import {PostProps} from '../postInterface';

const App:React.FC = () => {

  const [posts, setPosts] = useState<PostProps[]>([]);

  const newPostHandler = (title: string, description: string) => {
    setPosts(prevPosts => [...prevPosts, {id: Math.random().toString(), title: title, description: description, comments: []}]);
    console.log(posts);
  }

  const postsRoute = (
    <div className="container">
      <NewPost onNewPost={newPostHandler} />
      <Posts allPosts={posts} />
    </div>
  );


  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/posts">
          {postsRoute}
        </Route>
        <Route path="/home">
          <h1>Homepage</h1>
        </Route>
        <Redirect to="/home" />
      </Switch>



    </div>
  );
}

export default App;
