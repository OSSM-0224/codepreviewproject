import PostItem from "./PostItem";

export default function PostList({ posts, deletePost, setEditPost }) {
  return (
    <div className="grid gap-4">
      {posts.length === 0 && (
        <p className="text-gray-400 text-center">No posts yet...</p>
      )}

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