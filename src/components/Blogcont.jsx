/* eslint-disable */
import "./blogcont.css";
export default function Blogcont({ blog }) {
  return (
    <div className="blogcontanier">
      <div className="conter">
        <div className="imgtitle">
          <img
            src="https://img.freepik.com/vecteurs-libre/animaux-zoo-dans-fond-nature-sauvage_1308-44197.jpg"
            alt=""
          />
          <div className="authortit">
            <h2>{blog.author}</h2>
          </div>
        </div>

        <div className="blogcontent">
          <div className="content">
            <h1>{blog.title}</h1>
            <p> {blog.body}</p>
          </div>

          <div className="blogimg">
            <img
              src="https://img.freepik.com/vecteurs-libre/animaux-zoo-dans-fond-nature-sauvage_1308-44197.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
