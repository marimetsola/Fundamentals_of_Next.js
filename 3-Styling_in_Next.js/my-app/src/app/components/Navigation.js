"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={`${styles.navigation} font-nova`}>
      <Link className={styles.link} href="/">
        Back to Home
      </Link>
      <Link className={styles.link} href="/about">
        Go to About Page
      </Link>
    </div>
  );
}
