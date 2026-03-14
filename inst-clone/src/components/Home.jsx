import { useState } from "react";
import "./Home.css";

function Home({ setPage }) {

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "john_doe",
      img: "https://picsum.photos/500/400?1",
      liked: false,
      comments: ["Nice photo"]
    },
    {
      id: 2,
      user: "prince_dev",
      img: "https://picsum.photos/500/400?2",
      liked: false,
      comments: []
    },
    {
      id: 3,
      user: "react_user",
      img: "https://picsum.photos/500/400?3",
      liked: false,
      comments: []
    }
  ]);

  const [commentInput, setCommentInput] = useState("");

  const toggleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
  };

  const addComment = (id) => {

    if (commentInput.trim() === "") return;

    const updatedPosts = posts.map((post) => {

      if (post.id === id) {
        return {
          ...post,
          comments: [...post.comments, commentInput]
        };
      }

      return post;

    });

    setPosts(updatedPosts);
    setCommentInput("");

  };

  return (

    <div className="home">

      {/* Navbar */}

      <nav className="navbar">

        <h3>MyCamFeed</h3>

        <button
          className="logout-btn"
          onClick={() => setPage("login")}
        >
          Logout
        </button>

      </nav>


      <div className="container">

        {posts.map((post)=>(
          <div key={post.id} className="post-card">

            {/* User */}

            <div className="user">

              <img
                src={`https://i.pravatar.cc/40?img=${post.id}`}
                alt=""
              />

              <strong>{post.user}</strong>

            </div>


            {/* Image */}

            <img
              src={post.img}
              className="post-img"
              alt=""
            />


            <div className="post-body">

              {/* Buttons */}

              <div className="actions">

                <button
                  className="like"
                  onClick={() => toggleLike(post.id)}
                >
                  {post.liked ? "❤️ Liked" : "🤍 Like"}
                </button>

                <button className="comment">
                  💬 Comment
                </button>

                <button className="share">
                  🔗 Share
                </button>

              </div>


              {/* Caption */}

              <p>
                <strong>{post.user}</strong> Amazing photo 📸
              </p>


              {/* Comments */}

              {post.comments.map((c,i)=>(
                <p key={i} className="comment-text">
                  {c}
                </p>
              ))}


              {/* Comment Input */}

              <div className="comment-box">

                <input
                  type="text"
                  placeholder="Write comment..."
                  value={commentInput}
                  onChange={(e)=>setCommentInput(e.target.value)}
                />

                <button
                  onClick={()=>addComment(post.id)}
                >
                  Post
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  );
}

export default Home;