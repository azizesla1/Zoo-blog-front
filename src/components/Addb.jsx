import "./addb.css";
import { useState } from "react";
import axios from "axios";

export default function Addb() {
  const [formData, setFormData] = useState({ author: "", title: "", body: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await axios.post("http://localhost:5000/blog", formData);
    console.log(response);
    if (response.status === 201) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {showSuccess && (
        <div className="alert alert-success">Blog post added successfully!</div>
      )}

      <div className="add">
        <h1>Add to Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="addauthor">
            <h2>Author</h2>
            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              required
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className="border"></div>

          <div className="addbody">
            <h2> Body and Title</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
            />

            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              name="body"
              rows="6"
              cols="40"
              required
              value={formData.body}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="border"></div>

          <div className="btn">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add To Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
