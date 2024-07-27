import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  var {handleSubmit,title,setTitle,body,setBody} = useContext(DataContext);
  return (
    <main className='NewPost'>
      <h2>New Posts</h2>
      <form className='newPostForm' onSubmit={handleSubmit} >
        <label htmlFor="postTitle">Title:</label>
        <input 
        type="text"
        required
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />

        <label htmlFor="postBody">Post:</label>
        <textarea 
        id="postBody"
        required
        type="text"
        placeholder='Post'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type='submit' className='deleteButton'>Submit</button>
      </form>

    </main>
  )
}

export default NewPost