import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom'; 

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('NEW BLOG ADDED!');
      setIsPending(false);
      // history.go(-1);
      history.push('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog title:
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Blog body:
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog....</button> }
      </form>
    </div>
  );
}

export default Create;