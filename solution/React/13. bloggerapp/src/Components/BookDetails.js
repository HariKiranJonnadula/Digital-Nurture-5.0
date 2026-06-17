import React from 'react';

function BookDetails() {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", description: "A handbook of agile software craftsmanship." },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", description: "Your journey to mastery." }
  ];

  return (
    <div style={{ padding: '1rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.1)' }}>
      <h3 style={{ color: '#38bdf8', marginTop: 0 }}>📚 Book Details</h3>
      {books.map(book => (
        <div key={book.id} style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.5rem' }}>
          <h4 style={{ margin: '0 0 0.25rem 0', color: '#f1f5f9' }}>{book.title}</h4>
          <p style={{ margin: '0 0 0.25rem 0', color: '#94a3b8', fontSize: '0.9rem' }}>By {book.author}</p>
          <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.95rem' }}>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;
