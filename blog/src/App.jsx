import { useState, useEffect } from "react";

function App() {
  //stores posts & errors
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch posts
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        //checks if datta was fetched
        if (!response.ok) {
          throw new Error("DATA FETCHING FAILED");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        //stores the error
        setError(err.message);
      }
    };
    fetchBlogPosts();
  }, []);

  //displays content on the page
  return (
    <div>
      {error && <h1>{error}</h1>}

      {posts.map((post, index) => (
        <div key={post.id}>
          <h1>Posts</h1>
          <h2>
            {index + 1}.{post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
