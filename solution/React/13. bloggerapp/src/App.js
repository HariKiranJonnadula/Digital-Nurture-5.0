import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('book'); // 'book', 'blog', 'course'
  const [renderStrategy, setRenderStrategy] = useState('ternary'); // 'ifelse', 'variable', 'ternary', 'logical'

  // Strategy 1: If-Else Statement
  const renderWithIfElse = () => {
    if (activeTab === 'book') {
      return <BookDetails />;
    } else if (activeTab === 'blog') {
      return <BlogDetails />;
    } else if (activeTab === 'course') {
      return <CourseDetails />;
    } else {
      return null;
    }
  };

  // Strategy 2: Element Variables
  let renderedElement;
  if (activeTab === 'book') {
    renderedElement = <BookDetails />;
  } else if (activeTab === 'blog') {
    renderedElement = <BlogDetails />;
  } else if (activeTab === 'course') {
    renderedElement = <CourseDetails />;
  }

  return (
    <div className="card-container" style={{ maxWidth: '650px', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Blogger Dashboard</h2>

      {/* Control Panel: Choosing Category */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#94a3b8' }}>Select Content:</h4>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('book')}
            style={{ 
              background: activeTab === 'book' ? 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)' : '#334155',
              flex: 1, margin: 0 
            }}
          >
            Books
          </button>
          <button 
            onClick={() => setActiveTab('blog')}
            style={{ 
              background: activeTab === 'blog' ? 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)' : '#334155',
              flex: 1, margin: 0 
            }}
          >
            Blogs
          </button>
          <button 
            onClick={() => setActiveTab('course')}
            style={{ 
              background: activeTab === 'course' ? 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)' : '#334155',
              flex: 1, margin: 0 
            }}
          >
            Courses
          </button>
        </div>
      </div>

      {/* Control Panel: Choosing Rendering Strategy */}
      <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <h4 style={{ margin: '0 0 0.75rem 0', color: '#94a3b8' }}>Conditional Rendering Approach:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="strategy" 
              value="ifelse" 
              checked={renderStrategy === 'ifelse'} 
              onChange={() => setRenderStrategy('ifelse')} 
            />
            <span>If-Else Statement</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="strategy" 
              value="variable" 
              checked={renderStrategy === 'variable'} 
              onChange={() => setRenderStrategy('variable')} 
            />
            <span>Element Variables</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="strategy" 
              value="ternary" 
              checked={renderStrategy === 'ternary'} 
              onChange={() => setRenderStrategy('ternary')} 
            />
            <span>Ternary Operator</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="strategy" 
              value="logical" 
              checked={renderStrategy === 'logical'} 
              onChange={() => setRenderStrategy('logical')} 
            />
            <span>Logical && Operator</span>
          </label>
        </div>
      </div>

      {/* Render Output based on Selected Strategy */}
      <div style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.5rem', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.2)' }}>
        
        {/* Render Strategy 1: If-Else */}
        {renderStrategy === 'ifelse' && (
          <div>
            <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic', fontSize: '0.85rem', color: '#94a3b8' }}>
              💡 Rendering using **If-Else** statement inside a helper function call.
            </p>
            {renderWithIfElse()}
          </div>
        )}

        {/* Render Strategy 2: Element Variables */}
        {renderStrategy === 'variable' && (
          <div>
            <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic', fontSize: '0.85rem', color: '#94a3b8' }}>
              💡 Rendering using **Element Variable** (<code>{"{renderedElement}"}</code>).
            </p>
            {renderedElement}
          </div>
        )}

        {/* Render Strategy 3: Ternary Operator */}
        {renderStrategy === 'ternary' && (
          <div>
            <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic', fontSize: '0.85rem', color: '#94a3b8' }}>
              💡 Rendering inline using **Ternary Operator** (<code>{"activeTab === 'x' ? <Comp /> : null"}</code>).
            </p>
            {activeTab === 'book' ? <BookDetails /> : null}
            {activeTab === 'blog' ? <BlogDetails /> : null}
            {activeTab === 'course' ? <CourseDetails /> : null}
          </div>
        )}

        {/* Render Strategy 4: Logical && */}
        {renderStrategy === 'logical' && (
          <div>
            <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic', fontSize: '0.85rem', color: '#94a3b8' }}>
              💡 Rendering inline using **Logical && Operator** (<code>{"activeTab === 'x' && <Comp />"}</code>).
            </p>
            {activeTab === 'book' && <BookDetails />}
            {activeTab === 'blog' && <BlogDetails />}
            {activeTab === 'course' && <CourseDetails />}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
