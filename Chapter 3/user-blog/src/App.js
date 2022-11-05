import './App.css';
import {useState} from "react"
import UserBar from "./user/UserBar"
import PostList from './post/PostList';
import CreatePost from './post/CreatePost';


const defaultPosts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState(defaultPosts);

  return (
    <div className="App" style={{padding: 8}}>
      <UserBar user={user} setUser={setUser}/>
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      {user && <PostList posts={posts} />}
    </div>
  );
}

export default App;
