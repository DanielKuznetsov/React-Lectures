import './App.css';
import UserBar from "./user/UserBar"
import PostList from './post/PostList';
import CreatePost from './post/CreatePost';

const user = "Daniel Bugl";
const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

function App() {
  return (
    <div className="App" style={{padding: 8}}>
      <UserBar user={user}/>
      <br />
      <CreatePost user={user} />
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
