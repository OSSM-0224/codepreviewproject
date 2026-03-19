import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function PostForm({ addPost, updatePost, editPost }) {
  //React Hook Form use kar rahe hai
  const { register, handleSubmit, reset, setValue } = useForm();
  // file input ke liye ref
  const fileRef = useRef();
  // Image preview state
  const [preview, setPreview] = useState(null);

  // jab edit mode aaye to data fill karne ke liye
  useEffect(() => {
    if (editPost) {
      setValue("title", editPost.title);
      setValue("description", editPost.description);
      setPreview(editPost.image);
    }
  }, [editPost]);

  // image select karne par preview banyega
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  // form submit function
  const onSubmit = (data) => {
    const postData = {
      ...data,
      image: preview
    };

    if (editPost) {
      updatePost({ ...postData, id: editPost.id });
    } else {
      addPost(postData);
    }

    reset();
    setPreview(null);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#291d1c] p-6 rounded-xl shadow-lg mb-8"
    >
      <h2 className="text-2xl font-bold mb-4 text-[#ffb3ad]">
        {editPost ? "Edit Entry" : "Create Entry"}
      </h2>

      {/* Image Upload */}
      <div className="mb-4">
        <input
          type="file"
          ref={fileRef}
          onChange={handleImage}
          className="text-sm"
        />

        {/* Preview show */}
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-3 w-full h-48 object-cover rounded"
          />
        )}
      </div>

      {/* Title input */}
      <input
        {...register("title", { required: true })}
        placeholder="Exhibition Title"
        className="w-full mb-4 p-3 rounded bg-[#160b0b] text-white"
      />

      {/* Description */}
      <textarea
        {...register("description", { required: true })}
        placeholder="Narrative & Context"
        className="w-full mb-4 p-3 rounded bg-[#160b0b] text-white"
      />

      {/* Submit button */}
      <button className="w-full bg-gradient-to-r from-red-500 to-red-900 py-3 rounded-full font-bold">
        {editPost ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}