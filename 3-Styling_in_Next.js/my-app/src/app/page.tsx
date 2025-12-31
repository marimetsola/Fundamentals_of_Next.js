"use client";
import Title from "./components/Title";
import Button from "./components/Button";
import styles from "./home/home.module.css";
import Card from "./components/Card";
import AppLayout from "./components/AppLayout";
import Alert from "./components/Alert";

export default function Home() {
  return (
    <AppLayout>
      <div className={`font-nova ${styles.container}`}>
        <Alert />
        <Title>Mari's fabulous app 👸</Title>
        <p>I have no idea what this app is about. I'm sure it will be great!</p>
        <br />
        <Button>Un Bouton</Button>
        <Card highlighted={true} />
        <Card highlighted={false} />
      </div>
    </AppLayout>
  );
}
