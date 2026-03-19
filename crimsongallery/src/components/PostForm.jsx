import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function PostForm({ addPost, updatePost, editPost }) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const fileRef = useRef();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (editPost) {
      setValue("title", editPost.title);
      setValue("description", editPost.description);
      setPreview(editPost.image);
    }
  }, [editPost]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const onSubmit = (data) => {
    const postData = { ...data, image: preview };

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
      className="bg-[#291d1c] p-5 sm:p-6 rounded-xl shadow-lg mb-8 border border-[#3f3131]"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#ffb3ad]">
        {editPost ? "Edit Entry" : "Create Entry"}
      </h2>

      {/*Upload Box*/}
      <div
        onClick={() => fileRef.current.click()}
        className="border-2 border-dashed border-[#5b403e] rounded-xl p-4 text-center cursor-pointer hover:border-[#ffb3ad] transition mb-4"
      >
        <p className="text-sm text-[#e4beba]">
          Click to upload image
        </p>
        <input
          type="file"
          ref={fileRef}
          onChange={handleImage}
          className="hidden"
        />
      </div>

      {/*Preview card*/}
      {preview && (
        <div className="mb-4 bg-[#160b0b] rounded-xl overflow-hidden border border-[#3f3131]">
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 sm:h-52 object-cover"
          />
        </div>
      )}

      {/*Title*/}
      <input
        {...register("title", { required: true })}
        placeholder="Exhibition Title"
        className="w-full mb-3 p-3 rounded bg-[#160b0b] text-white text-sm sm:text-base"
      />

      {/*Description*/}
      <textarea
        {...register("description", { required: true })}
        placeholder="Narrative & Context"
        className="w-full mb-4 p-3 rounded bg-[#160b0b] text-white text-sm sm:text-base"
      />

      <button className="w-full bg-linear-to-r from-red-500 to-red-900 py-3 rounded-full font-bold hover:scale-105 transition">
        {editPost ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}