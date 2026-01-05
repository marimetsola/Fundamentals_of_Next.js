import Title from "../components/Title";

export default async function ProfilePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <div className="m-8">
      <Title>Profile</Title>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
