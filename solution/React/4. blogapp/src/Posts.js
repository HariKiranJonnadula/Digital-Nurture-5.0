import React, { Component } from 'react';

// A child component that can trigger rendering errors
class PostItem extends Component {
  render() {
    if (this.props.triggerError) {
      throw new Error("Simulated rendering error for testing componentDidCatch!");
    }
    
    const { post } = this.props;
    return (
      <div 
        style={{
          background: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1rem'
        }}
      >
        <h4 style={{ margin: '0 0 0.5rem 0', color: '#e2e8f0', textTransform: 'capitalize' }}>
          {post.id}. {post.title}
        </h4>
        <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {post.body}
        </p>
      </div>
    );
  }
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      hasError: false,
      triggerError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({
      hasError: true,
      error: error
    });
    alert("An error occurred in a child component: " + error.toString());
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data.slice(0, 5) }); // Slice to 5 posts for clean display
      })
      .catch(err => {
        console.error("Fetch error: ", err);
        this.setState({ error: err.message });
      });
  };

  handleTriggerError = () => {
    this.setState({ triggerError: true });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', border: '1px solid #ef4444', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
          <h4>Error Boundary Triggered</h4>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button 
            onClick={() => this.setState({ hasError: false, triggerError: false })}
            style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
          >
            Reset Component
          </button>
        </div>
      );
    }

    const { posts, error } = this.state;

    return (
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, color: '#38bdf8' }}>Recent Posts</h3>
          <button 
            onClick={this.handleTriggerError}
            style={{ 
              background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
              fontSize: '0.8rem',
              padding: '0.4rem 0.8rem'
            }}
          >
            Simulate Error
          </button>
        </div>

        {error && (
          <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
            Error loading posts: {error}
          </div>
        )}

        {posts.length === 0 && !error ? (
          <p>Loading posts...</p>
        ) : (
          posts.map(post => (
            <PostItem 
              key={post.id} 
              post={post} 
              triggerError={this.state.triggerError && post.id === 1} // trigger error on first item
            />
          ))
        )}
      </div>
    );
  }
}

export default Posts;
