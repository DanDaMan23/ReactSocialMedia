import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Posts from '../components/Posts/Posts';
import NewPost from '../components/Posts/NewPost/newPost';
import NavBar from './NavBar';

import {PostProps} from '../postInterface';

const App:React.FC = () => {

  const [posts, setPosts] = useState<PostProps[]>([]);

  const newPostHandler = (title: string, description: string) => {
    setPosts(prevPosts => [...prevPosts, {id: Math.random().toString(), title: title, description: description, comments: []}]);
    postSaveInDatabase(title, description);
    console.log(posts);
  }

  const postSaveInDatabase = (title: string, description: string) => {
    fetch('https://social-media-react-37340-default-rtdb.firebaseio.com/posts.json', {
      method: 'POST',
      body: JSON.stringify({username: "Unknown", title: title, description: description, comments: []}),
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json() );
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
