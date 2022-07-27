import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its result
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/");

      // After fetching data stored it in posts state.
      setPosts(response.data);

      // Closed the loading page
      setLoading(false);
    }

    // Call the function
    loadPost();
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>) :
          (posts.map((item) =>
            // Presently we only fetch
            // title from the API
            <h4>{item.title}</h4>)
          )
      }
      </div>
    </>
  )
}

export default App;