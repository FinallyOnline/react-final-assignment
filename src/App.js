import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
      <div className="App">
        <h1>BlogExplorer</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <PostList onSelectPost={setSelectedPostId} />
          </div>
          <div style={{ flex: 2 }}>
            {selectedPostId && <PostDetail postId={selectedPostId} />}
          </div>
        </div>
      </div>
  );
}

export default App;