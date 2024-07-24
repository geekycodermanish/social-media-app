import React, { useState } from "react";
import { AddNewPost } from "../Services/api";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const { status } = await AddNewPost({ content });

    if (status === 201) {
      navigate("/home");
    }
  };

  return (
    <div className="flex justify-center pt-10">
      <form className="w-3/5 flex flex-col gap-y-8" onSubmit={SubmitHandler}>
        <h1 className="text-3xl font-bold">Add New Feed</h1>
        <textarea
          name="content"
          className="w-full border border-gray-400 rounded-lg p-4"
          rows={6}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="self-end bg-[#0094f6] hover:bg-[#00376b] text-white rounded-lg px-4 text-lg py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPost;
