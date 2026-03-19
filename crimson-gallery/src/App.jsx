import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function App() {
  // Saare posts yaha store honge
  const [posts, setPosts] = useState([]);

  // edit karna hoga to
  const [editPost, setEditPost] = useState(null);

  // naya post add karna hoga to
  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  // post update karneko
  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setEditPost(null);
  };

  // post delete karne ke liye
  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1c1010] text-[#f4dddd]">
      <header className="p-6 text-2xl font-bold text-[#ffb3ad]">
        Crimson Gallery
      </header>

      <div className="max-w-3xl mx-auto p-4">
        {/* form ka component */}
        <PostForm addPost={addPost} updatePost={updatePost} editPost={editPost} />

        {/* list ka component */}
        <PostList
          posts={posts}
          deletePost={deletePost}
          setEditPost={setEditPost}
        />
      </div>
    </div>
  );
}