import Feed from "@/components/Feed";

const HomePage = () => {
  return (
    <section className="flex-col w-full text-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="mx-auto text-center desc">
        Promtip is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
};

export default HomePage;
