export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const revalidate = 10;

export default async function BlogPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const shuffledPosts = shuffleArray(posts);
  const timestamp = new Date().toLocaleString();

  return (
    <div className="m-8">
      <h1>Blog</h1>

      <p>Last updated: {timestamp}</p>

      <ul>
        {shuffledPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
