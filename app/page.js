import PostList from "@/components/post-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <h1 className="font-serif grow-0 text-7xl">Home</h1>

      <section className="grow">
        <PostList />
      </section>
    </div>
  );
}
