import { useState, useEffect } from "react";

function App() {
  //stores posts & errors
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch posts
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //checks if datta was fetched
        if (!response.ok) {
          throw new Error("DATA FETCHING FAILED");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  //displays content on the page
  return (
    <div>
      {error ? (
        <h1>DATA FETCHING FAILED</h1>
      ) : (
        posts.map((post, index) => (
          <div key={post.id}>
            <h1>Posts</h1>
            <h2>
              {index + 1}.{post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default App;
