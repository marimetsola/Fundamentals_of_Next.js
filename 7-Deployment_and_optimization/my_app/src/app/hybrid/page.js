import Title from "../components/Title";

export const revalidate = 10;

export default async function HybridPage() {
  // ISR
  const usersRes = await fetch("https://randomuser.me/api/?results=5", {
    next: { revalidate: 10 },
  });
  const randomUsers = await usersRes.json();

  // SSR
  const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });
  const user = await userRes.json();

  return (
    <div className="m-8">
      <Title>Hybrid Page</Title>

      <section className="mb-4">
        <h2 className="text-2xl">Random Users (ISR)</h2>
        <ul>
          {randomUsers.results.map((user) => (
            <li key={user.login.uuid}>{user.name.first}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl">User Dashboard (SSR)</h2>
        <p>Welcome back, {user.name}!</p>
        <p>Email: {user.email}</p>
      </section>
      <p>
        Server-rendered at: <strong>{new Date().toLocaleTimeString()}</strong>
      </p>
    </div>
  );
}
