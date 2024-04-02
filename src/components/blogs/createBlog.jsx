import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './createBlog.module.css';
import { useNavigate } from 'react-router-dom';


export const CreateBlog=()=>{
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image,setImage]=useState(null);
    const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleTitle=(e)=>{
    setTitle(e.target.value)
  }
  const handleDescription=(e)=>{
    setDescription(e.target.value)
  }
//   const convertBase = (e)=>{
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload=()=>{
//         console.log(reader.result);
//         setImg(reader.result)
//     }
//     reader.onerror=error=>{
//         console.log("error")
//     }
    const handleInput=(e)=>{
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        console.log('inside handle submit')
        formData.append("image", image);
        formData.append("name", name);
        formData.append("title", title);
        formData.append("description", description);
        await axios.post("https://backend-blog-419103.uk.r.appspot.com/uploadImg",formData,{
            headers: { "Content-Type": "multipart/form-data"}
        })
        alert("Posted successfully")
        navigate("/home");
        setImage(null);
        setName('');
        setDescription('');
        setTitle('');
    }
    return(
        <div className={styles.container}> 
        <h1 className={styles.heading}>Create a Story</h1>
        <div className={styles.labelBox}>
            <form  className={styles.formBox} onSubmit={handleSubmit} encType="multipart/form-data">
               <input  type='file' accept='image/*' id='browseFile' onChange={handleInput}></input>
                <input className={styles.name} name='name' placeholder='Name' onChange={handleName} required></input>
                <input className={styles.title} name='title' placeholder='Title' onChange={handleTitle} required ></input>
                <textarea className={styles.description} name='description' placeholder='Write your story here' onChange={handleDescription} required></textarea>
                <button className={styles.btn} type='submit'>Post</button>
            </form>
            </div>
            
        </div>
    )
}