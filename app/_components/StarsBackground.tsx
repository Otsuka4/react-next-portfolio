"use client";
import { useEffect, useState } from "react";
import styles from "./StarsBackground.module.css";

export default function StarsBackground() {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const numStars = 100; // 星の数
    const starElements = Array.from({ length: numStars }).map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;

      return (
        <div
          key={i}
          className={styles.star}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });

    setStars(starElements);
  }, []);

  return <div className={styles.stars}>{stars}</div>;
}
