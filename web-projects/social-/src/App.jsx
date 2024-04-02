
import React, { useState } from 'react';
import Post from './Post';
import CreatePostForm from './CreatePostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (postData) => {
    setPosts([...posts, postData]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>

      <CreatePostForm onSubmit={handleCreatePost} />

      {/* Feed */}
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default App;
