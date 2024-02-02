import PromptCard from "@/components/Prompt/PromptCard";

const PromptCardList = ({
  data,
  handleTagClick,
  handleDelete,
  handleEdit,
  editable,
}) => (
  <div className="prompt_layout">
    {data?.map((post) => (
      <PromptCard
        key={post?._id}
        post={post}
        handleTagClick={(tag) => handleTagClick && handleTagClick(tag)}
        handleDelete={() => handleDelete && handleDelete(post)}
        handleEdit={() => handleEdit && handleEdit(post)}
        editable={editable}
      />
    ))}
  </div>
);

export default PromptCardList;
