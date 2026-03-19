export default function PostItem({ post, deletePost, setEditPost }) {
  return (
    <div className="bg-[#241918] p-4 sm:p-5 rounded-xl border border-[#3f3131] shadow-md hover:shadow-xl transition">
      {post.image && (
        <img
          src={post.image}
          alt="post"
          className="w-full h-40 sm:h-52 object-cover rounded-lg mb-3"
        />
      )}

      <h3 className="text-lg sm:text-xl font-bold text-[#ffb3ad]">
        {post.title}
      </h3>

      <p className="text-[#e4beba] mt-2 text-sm sm:text-base">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => setEditPost(post)}
          className="flex-1 sm:flex-none px-4 py-2 bg-yellow-600 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deletePost(post.id)}
          className="flex-1 sm:flex-none px-4 py-2 bg-red-700 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
