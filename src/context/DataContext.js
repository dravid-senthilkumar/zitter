import { useState, useEffect } from 'react';
import { createContext} from 'react';
import useWindowSize from "../hooks/useWindowSize";
import {format} from "date-fns";
// import api from "../api/posts";
import { useNavigate } from 'react-router-dom';


const DataContext = createContext({})

export const DataProvider = ({children}) => {

    
var [posts,setNewPosts] = useState([]);
var [search, setSearch] = useState('');
var [searchResults , setSearchResults] = useState([]);
var [title,setTitle] = useState('');
var [body,setBody] = useState('');
var [editTitle, setEditTitle] = useState('');
var [editBody, setEditBody] = useState('');
var {width} = useWindowSize();
var navigate = useNavigate();


useEffect(() =>{
// //   // const fetchApi = async() =>{
// //   //   try{
// //   //     const response = await api.get("/posts")
// //   //     setNewPosts(response.data)
// //   //   }catch(err){
// //   //     console.log(`Error : ${err.message}`)
// //   //   }
// //   // }
// //   // fetchApi();
var storedData = JSON.parse(localStorage.getItem('zitter_app'));
  if(storedData) setNewPosts(storedData);
},[])

useEffect(() => {
  const filteredResults = posts.filter((post) => 
    post.title.toLowerCase().includes(search.toLowerCase()) || 
    post.body.toLowerCase().includes(search.toLowerCase())
  );
  setSearchResults(filteredResults.reverse());
}, [posts, search]);



var handleSubmit = (e) =>{
  e.preventDefault();
  var id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  var dateTime = format(new Date(), "MMMM dd, yyyy pp");
  var newPost = {id, title: title, datetime: dateTime, body: body};
  // try{
  //   const response = await api.post("/posts", newPost);
     var allPost = [...posts , newPost];
     setNewPosts(allPost);
     setTitle('');
     setBody('');
     navigate("/");
  // }catch(err){
  //   console.log(`Error: ${err.message}`);
  // }
  localStorage.setItem("zitter_app", JSON.stringify(allPost))
};


const handleDelete = (id) =>{
  // try{
      // await api.delete(`/posts/${id}`);
  var finalPosts = posts.filter((post) => post.id !== id);
  setNewPosts(finalPosts);
  navigate("/");
  // }catch(err){
  // //     console.log(`Error: ${err.message}`);
  //   }
    localStorage.setItem("zitter_app", JSON.stringify(finalPosts))
  // }
};


const handleEdit = (id) =>{
  var dateTime = format(new Date(), "MMMM dd, yyyy pp");
  var updatedPost = {id, title: editTitle, datetime: dateTime, body: editBody};
  // try{
  //   var response = await api.put(`/posts/${id}`, updatedPost);
  var update = posts.map(post => post.id === id ? {...updatedPost} : post)
    setNewPosts(update);
    setEditTitle('');
    setEditBody('');
    navigate('/');
  // }catch(err){
  //   console.log(`Error : ${err.message}`);
  // }
  localStorage.setItem("zitter_app", JSON.stringify(update))
};

  return (
    <DataContext.Provider value={{width, search, setSearch, handleSubmit, title, setTitle, body, setBody, posts, handleDelete, handleEdit, searchResults, editTitle, setEditTitle, editBody, setEditBody}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext