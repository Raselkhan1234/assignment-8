import React from 'react';
import { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const Post = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#ffca28' }}>All Posts From The Users.</h1>
      {
        post.map(pt => <PostDetails post={pt} key={pt.id} ></PostDetails>)
      }

    </div>
  );
};

export default Post;