import { useRouter } from 'next/router';

const blogPosts = {
  1: { title: 'Web Development Tips', content: 'Here are some awesome web dev tips...' },
  2: { title: 'AI in 2024', content: 'AI is evolving rapidly. Here are the trends for 2024...' },
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogPosts[id];

  if (!blog) return <p>Blog post not found!</p>;

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="mt-6">{blog.content}</p>
    </section>
  );
}

