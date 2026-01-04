export const revalidate = 10;

export default async function BlogPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const timestamp = new Date().toLocaleString();

  return (
    <div>
      <h1>Blog</h1>

      <p>Last updated: {timestamp}</p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
