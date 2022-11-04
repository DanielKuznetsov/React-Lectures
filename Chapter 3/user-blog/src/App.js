import './App.css';
// import UserBar from "./user/UserBar"
import PostList from './post/PostList';

const posts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOM tree clean!', author: 'Daniel Bugl' }
]

function App() {
  return (
    <div className="App">
      {/* <UserBar /> */}
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
