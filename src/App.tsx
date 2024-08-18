import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const baseURL1 = "https://jsonplaceholder.typicode.com/posts/2";

function App() {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="App">
      <div>
        <h3> Test api cache</h3>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
