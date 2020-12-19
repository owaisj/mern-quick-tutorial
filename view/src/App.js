import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

const PostView = (props) =>{
  const { title, body } = props;
  return (
    <div id={title}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}


function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [fTitle, setFTitle] = useState('');
  const [fBody, setFBody] = useState('');

  const getPosts = () => {
    fetch('/api/posts').then((res) => res.json()).then(data => {
      setPosts(data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <img src={logo} className="App-logo" alt="logo" />}
        {posts.map((post) => (
          <PostView key={post._id} title={post.title} body={post.body} />
        ))}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            fetch('/api/posts', {
              method: 'post',
              body: JSON.stringify({
                title: fTitle,
                body: fBody,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((res) => res.json())
              .then((data) => {
                setFTitle('');
                setFBody('');
                setLoading(true)
                getPosts();
              });
          }}
         style={{ display: 'flex', flexDirection: 'column'}}>
          <input type="text" value={fTitle} onChange={
            (e) => {
              setFTitle(e.target.value)
            }
          }/>
          <textarea value={fBody} onChange={
            (e) => {
              setFBody(e.target.value)
            }
          }/>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
