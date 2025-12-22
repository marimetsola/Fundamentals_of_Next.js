"use client";
import Title from "./components/Title";
import Button from "./components/Button";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <div className={`font-nova ${styles.container}`}>
      <Title>Mari's fabulous app 👸</Title>
      <p>I have no idea what this app is about. I'm sure it will be great!</p>
      <br />
      <Button>Un Bouton</Button>
    </div>
  );
}
