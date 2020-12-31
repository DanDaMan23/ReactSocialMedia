import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';

import Posts from '../components/Posts/posts';
import NewPost from '../components/Posts/NewPost/newPost';
import NavBar from './NavBar';
import LoginPage from '../components/Login/loginpage';

import {PostProps} from '../postInterface';

const App:React.FC = () => {

  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://social-media-react-37340-default-rtdb.firebaseio.com/posts.json')
      .then(response => response.json())
      .then(responseData => {
        for (const key in responseData) {
          let username = responseData[key].username;
          let title = responseData[key].title;
          let description = responseData[key].description;
          setPosts(prevPosts => [...prevPosts, {id: key, username: username, title: title, description: description, comments: []}]);
        }
      });
  }, []);

  const newPostHandler = (title: string, description: string): void => {
    postSaveInDatabase(title, description);
  }

  const postSaveInDatabase = (title: string, description: string): void => {
    fetch('https://social-media-react-37340-default-rtdb.firebaseio.com/posts.json', {
      method: 'POST',
      body: JSON.stringify({username: sessionStorage.username, title: title, description: description, comments: []}),
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json() )
    .then(responseData => {
      setPosts(prevPosts => [...prevPosts, {id: responseData['name'], username: sessionStorage.username, title: title, description: description, comments: []}]);
    });
  }

  const deletePostInDatabase = (postId: string): void => {
    fetch(`https://social-media-react-37340-default-rtdb.firebaseio.com/posts/${postId}.json`, {
      method: 'DELETE'
    }).then(() => {
      console.log('removed');
    } ).catch((err) => {
      console.error(err);
    });
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId) );
    console.log(postId);
  }

  const postsRoute: JSX.Element = (
    <div className="container">
      <NewPost onNewPost={newPostHandler} />
      <Posts allPosts={posts} deletePost={deletePostInDatabase} />
    </div>
  );

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/posts">
          {sessionStorage.username ? postsRoute : () => (
            <div className="container">
              Click the link to <Link to="/login">Login</Link>
            </div>
          )}
        </Route>
        <Route path="/home">
          <h1>Homepage</h1>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Redirect to="/login" />
      </Switch>



    </div>
  );
}

export default App;
