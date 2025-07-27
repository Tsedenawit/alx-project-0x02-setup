import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => (
  <div>
    <Header />
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  </div>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json(),
  },
  revalidate: 60,
});

export default Posts;
