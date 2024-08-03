import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext);
  var {id} = useParams();
  var post = posts.find((post) => (post.id).toString() === id);
 return(
    <main>
      <div className="post editPost">
      {post ?
      ( <>
      <h2 >{post.title}</h2>
      <p className="postDate">{post.datetime}</p>
      <p className="postBody">{(post.body).length <= 45 ? post.body : `${(post.body).slice(0,45)}...`}</p>
      <Link to={`/edit/${post.id}`}> <button id='editButton'>Edit Post</button> </Link> 
      <button id='deleteButton' onClick={() => handleDelete(post.id)}>Delete</button>
      </> ) : (

        <>
        <h2>Error 404</h2>
      <h3>Page Not Found</h3>
      <p>Well, that's disappointing.</p>
    <Link to="/"> <p>Visit our Home Page</p> </Link>
        </>
      )
      }
    </div>
    </main>
    )
}

export default PostPage