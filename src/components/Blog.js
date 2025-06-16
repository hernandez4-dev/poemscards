import React from 'react';
import './Blog.css';

const poems = [
  { id: 1, title: "Poem 1", content: "This is the first beautiful poem.\nIt speaks of wonders and dreams." },
  { id: 2, title: "Poem 2", content: "Another verse, short and sweet,\nA moment captured, a feeling fleet." },
  { id: 3, title: "Poem 3", content: "The world of words, a vast expanse,\nWhere thoughts take flight, and spirits dance." }
];

function Blog() {
  return (
    <div className="blog-container">
      <h2>Poem Collection</h2>
      {poems.map(poem => (
        <article key={poem.id} className="poem">
          <h3>{poem.title}</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{poem.content}</p>
        </article>
      ))}
    </div>
  );
}

export default Blog;
