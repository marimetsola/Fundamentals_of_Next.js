export default function Card({ highlighted }) {
  return (
    <div
      style={{
        margin: "1rem 0",
        padding: "1.25rem",
        backgroundColor: highlighted
          ? "var(--accent-primary)"
          : "var(--accent-secondary)",
        border: "1px solid #ffeff8",
        borderRadius: "10px",
      }}
    >
      <p>A Card Component</p>
    </div>
  );
}
