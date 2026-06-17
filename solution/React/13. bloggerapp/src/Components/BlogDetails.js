import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 1, title: "Understanding React Virtual DOM", reads: "1.2k reads", summary: "A deep dive into why React is so fast and how it renders updates." },
    { id: 2, title: "ES6 Features You Should Know", reads: "850 reads", summary: "Destructuring, spread operator, arrow functions, and more." }
  ];

  return (
    <div style={{ padding: '1rem', background: 'rgba(168, 85, 247, 0.05)', borderRadius: '8px', border: '1px solid rgba(168, 85, 247, 0.1)' }}>
      <h3 style={{ color: '#a855f7', marginTop: 0 }}>✍️ Blog Details</h3>
      {blogs.map(blog => (
        <div key={blog.id} style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: '0 0 0.25rem 0', color: '#f1f5f9' }}>{blog.title}</h4>
            <span style={{ fontSize: '0.8rem', color: '#a855f7', background: 'rgba(168, 85, 247, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '12px' }}>{blog.reads}</span>
          </div>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
