"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <div className={`${styles.navigation} font-nova`}>
      <Link
        href="/"
        className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`${styles.link} ${isActive("/about") ? styles.active : ""}`}
      >
        About
      </Link>

      <Link
        href="/profile"
        className={`${styles.link} ${
          isActive("/profile") ? styles.active : ""
        }`}
      >
        My Profile
      </Link>

      <Link
        href="/profiles"
        className={`${styles.link} ${
          isActive("/profiles") ? styles.active : ""
        }`}
      >
        Profiles
      </Link>

      <Link
        href="/contact"
        className={`${styles.link} ${
          isActive("/contact") ? styles.active : ""
        }`}
      >
        Contact
      </Link>

      <Link
        href="/blog"
        className={`${styles.link} ${isActive("/blog") ? styles.active : ""}`}
      >
        Blog
      </Link>

      <Link
        href="/hybrid"
        className={`${styles.link} ${isActive("/hybrid") ? styles.active : ""}`}
      >
        Hybrid
      </Link>
    </div>
  );
}
