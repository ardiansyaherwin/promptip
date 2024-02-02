"use client";

import PromptCardList from "@/components/Prompt/PromptCardList";

const Profile = ({ name, desc, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="text-left desc">{desc}</p>

      <div className="mt-10" />
      <PromptCardList
        data={data}
        handleEdit={(post) => handleEdit && handleEdit(post)}
        handleDelete={(post) => handleDelete && handleDelete(post)}
        editable
      />
    </section>
  );
};

export default Profile;
