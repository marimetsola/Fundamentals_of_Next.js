import Image from "next/image";
import Title from "../components/Title";

export default async function ProfilePage() {
  console.log("Rendering profile on server");

  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <div className="m-8">
      <Title>Profile</Title>
      <p className="mb-4">Welcome, {user.name}!</p>
      <Image
        src="/images/ai_pc_barbell_shoes.png"
        alt="Profile image"
        width={768}
        height={512}
        priority
      />
    </div>
  );
}
