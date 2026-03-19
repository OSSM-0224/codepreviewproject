import PostItem from "./PostItem";

export default function PostList({ posts, deletePost, setEditPost }) {
  return (
    <div>
      {/*Agar koi post nahi hai*/}
      {posts.length === 0 && (
        <p className="text-gray-400">No posts yet...</p>
      )}

      {/* Ssab posts show karega*/}
      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          deletePost={deletePost}
          setEditPost={setEditPost}
        />
      ))}
    </div>
  );
}