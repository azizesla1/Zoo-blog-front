import Navbar from "../components/Navbar";
import Blogcont from "../components/Blogcont";
import { useState, useEffect } from "react";
import axios from "axios";

function Blog() {
  async function GetAllBlogs() {
    const bloglista = await axios.get("http://localhost:5000/blog/");
    return bloglista;
  }
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    async function getBlog() {
      const blogLista = await GetAllBlogs();
      console.log(blogLista);
      setBlogList(blogLista.data);
    }
    getBlog();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="blogcontanier">
        {blogList.map((blog,i)=>{
          return <Blogcont key={i} blog={blog} />
        })}
      </div>
      
    </div>
  );
}

export default Blog;
