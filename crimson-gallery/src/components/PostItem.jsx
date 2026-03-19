export default function PostItem({ post, deletePost, setEditPost }) {
  return (
    <div className="bg-[#241918] p-5 rounded-xl mb-4 border border-[#3f3131]">
      {/* Image show */}
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-[#ffb3ad]">{post.title}</h3>

      {/* Description */}
      <p className="text-[#e4beba] mt-2">{post.description}</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setEditPost(post)}
          className="px-4 py-2 bg-yellow-600 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deletePost(post.id)}
          className="px-4 py-2 bg-red-700 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
