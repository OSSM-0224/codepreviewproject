import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setEditPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1c1010] text-[#f4dddd] px-4 sm:px-6">
      
      {/* 🔥 Header */}
      <header className="py-5 text-xl sm:text-2xl font-bold text-[#ffb3ad] text-center sm:text-left">
        Crimson Gallery
      </header>

      {/* 🧠 Description Section */}
      <div className="max-w-3xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#ffb3ad] mb-2">
          Create. Curate. Showcase.
        </h2>
        <p className="text-sm sm:text-base text-[#e4beba] leading-relaxed">
          Crimson Gallery is a creative posting platform where every post feels like an exhibition.
          Share your ideas, stories, and visuals with a beautifully crafted dark interface designed 
          to highlight your content like a piece of art.
        </p>
      </div>

      {/* 📦 Main Content */}
      <div className="max-w-3xl mx-auto">
        <PostForm 
          addPost={addPost} 
          updatePost={updatePost} 
          editPost={editPost} 
        />

        <PostList
          posts={posts}
          deletePost={deletePost}
          setEditPost={setEditPost}
        />
      </div>
    </div>
  );
}