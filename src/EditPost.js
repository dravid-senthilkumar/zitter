import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
  const {posts, handleEdit , editTitle, setEditTitle, editBody, setEditBody} = useContext(DataContext);
    var {id} = useParams();
    var post = posts.find((post) => (post.id).toString() === id)

    useEffect(() => {
     if (post) {
        setEditTitle(post.title)
        setEditBody(post.body)
      }
    },[post,setEditBody,setEditTitle])
  return (
    <main className='NewPost'>
       {     
        post ? (
               <>
                     <h2>Edit Post </h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()} >
                    <label htmlFor="postTitle">Title:</label>
                     <input 
                     id='postTitle'
                     type="text"
                     required
                     placeholder='Title'
                     value={editTitle}
                     onChange={(e) => setEditTitle(e.target.value)}
                      />

                    <label htmlFor="postBody">Post:</label>
                      <textarea 
                     id="postBody"
                     required
                     type="text"
                     placeholder='Post'
                     value={editBody}
                     onChange={(e) => setEditBody(e.target.value)}
                     />

                     <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                    </form>
                    </>
                    ) : (

                    <>
                    <h2>Error 404</h2>
                    <h3>Page Not Found</h3>
                    <p>Well, that's disappointing.</p>
                    <Link to="/"> <p>Visit our Home Page</p> </Link>
                     </>
                )
            }
       
       
    </main>
  )
}

export default EditPost