"use client";
import Link from "next/link";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <div className={`font-mono ${styles.container}`}>
      <Link className={styles.link} href="/about">
        Go to About Page
      </Link>
      <h1 className={styles.title}>Mari's fabulous app 👸</h1>
      <p>I have no idea what this app is about. I'm sure it will be great!</p>
    </div>
  );
}
