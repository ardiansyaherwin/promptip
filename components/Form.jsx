import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-Powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label>
          <span className="font-semibold text-gray-700 font-satoshi font-base">
            Your AI Prompt
          </span>

          <textarea
            name="prompt"
            id="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-semibold text-gray-700 font-satoshi font-base">
            Tag{" "}
            <span className="italic font-normal text-gray-400">
              (product, webdevelopment, idea)
            </span>
          </span>

          <input
            type="text"
            name="tag"
            id="tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="tag"
            required
            className="form_input"
          />
        </label>
        <div className="gap-4 mx-2 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500 ">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className=" px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {type}
            {submitting ? " ..." : ""}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
