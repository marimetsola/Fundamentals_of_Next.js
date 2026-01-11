import styles from "./ProfileCard.module.css";

export default function ProfileCard({ premium, id }) {
  return (
    <div
      className={`mx-2 border-4 rounded-lg text-black ${styles.profile_card}`}
      style={{
        backgroundColor: premium ? "#ffde25" : "#fff9d9",
        borderColor: premium
          ? "var(--color-amber-500)"
          : "var(--color-amber-400)",
      }}
    >
      <h2 className="text-center py-1">Profile {id}</h2>
      <hr />
      <p className="p-2">Information about profile number {id}.</p>
    </div>
  );
}
