import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const [commentInputs, setCommentInputs] = useState({});

  // Like toggle
  const toggleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, liked: !post.liked } : post
    );
    setPosts(updatedPosts);
  };

  // Handle input per post
  const handleInputChange = (id, value) => {
    setCommentInputs({
      ...commentInputs,
      [id]: value
    });
  };

  // Add comment
  const addComment = (id) => {
    const text = commentInputs[id];
    if (!text || text.trim() === "") return;

    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          comments: [...post.comments, text]
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    setCommentInputs({ ...commentInputs, [id]: "" });
  };

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <h3 className="text-white">MyCamFeed</h3>

        <button
          className="btn btn-outline-light"
          onClick={() => setPage("login")}
        >
          Logout
        </button>
      </nav>

      {/* Feed */}
      <div className="container py-4 d-flex flex-column align-items-center">

        {posts.map((post) => (
          <div
            key={post.id}
            className="card mb-4 shadow-sm"
            style={{
              width: "400px",
              background: "#1a1a1a",
              border: "1px solid #222",
              borderRadius: "12px",
              overflow: "hidden"
            }}
          >

            {/* User */}
            <div className="d-flex align-items-center p-3">
              <img
                src={`https://i.pravatar.cc/40?img=${post.id}`}
                className="rounded-circle me-2"
                width="40"
                height="40"
                alt=""
              />
              <strong className="text-white">{post.user}</strong>
            </div>

            {/* Image */}
            <img
              src={post.img}
              className="card-img-top"
              style={{ height: "400px", objectFit: "cover" }}
              alt=""
            />

            {/* Body */}
            <div className="card-body text-white">

              {/* Actions */}
              <div className="d-flex gap-2 mb-2">

                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => toggleLike(post.id)}
                >
                  {post.liked ? "❤️ Liked" : "🤍 Like"}
                </button>

                <button className="btn btn-sm btn-outline-light">
                  💬 Comment
                </button>

                <button className="btn btn-sm btn-outline-light">
                  🔗 Share
                </button>

              </div>

              {/* Caption */}
              <p>
                <strong>{post.user}</strong> Amazing photo 📸
              </p>

              {/* Comments */}
              {post.comments.map((c, i) => (
                <p key={i} className="small text-secondary mb-1">
                  {c}
                </p>
              ))}

              {/* Comment box */}
              <div className="d-flex mt-2">
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Write comment..."
                  value={commentInputs[post.id] || ""}
                  onChange={(e) =>
                    handleInputChange(post.id, e.target.value)
                  }
                />

                <button
                  className="btn btn-primary ms-2"
                  onClick={() => addComment(post.id)}
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