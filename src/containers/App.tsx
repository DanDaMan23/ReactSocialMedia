import React, {useState, useEffect, createContext} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';

import Posts from '../components/Posts/posts';
import NewPost from '../components/Posts/NewPost/newPost';
import NavBar from './NavBar';
import LoginPage from '../components/Login/loginpage';

import {PostProps} from '../postInterface';

import {CommentContext} from '../context/commentContext';

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
          let comments = responseData[key].comments ? responseData[key].comments : [];
          setPosts(prevPosts => [...prevPosts, {id: key, username: username, title: title, description: description, comments: comments}]);
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

  const addComment = (postId: string, username: string, comment: string): void => {
    fetch(`https://social-media-react-37340-default-rtdb.firebaseio.com/posts/${postId}/comments.json`, {
      method: 'POST',
      body: JSON.stringify({username: username, comment: comment}),
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json() )
    .then(json => {
      // let currentPost = posts.find(post => post.id === postId);
      // currentPost!.comments.push({id: json, username: username, comment: comment});
      // console.log(currentPost!.comments);

      // setPosts(prevPosts => {
      //   let editedPosts = prevPosts;
      //   let currPost = editedPosts.find(post => post.id === postId);
      //   let currComments = currPost!.comments ? currPost!.comments : [];
      //   currComments.push({id: postId, username: username, comment: comment});
      //   return editedPosts;
      // });

    } );
  }

  const postsRoute: JSX.Element = (
    <div className="container">
      <NewPost onNewPost={newPostHandler} />
      <Posts allPosts={posts} deletePost={deletePostInDatabase} addComment={addComment} />
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
