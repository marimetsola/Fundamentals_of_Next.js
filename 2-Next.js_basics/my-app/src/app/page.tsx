"use client";
import Title from "./components/Title";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <div className={`font-mono ${styles.container}`}>
      <Title>Mari's fabulous app 👸</Title>
      <p>I have no idea what this app is about. I'm sure it will be great!</p>
    </div>
  );
}
