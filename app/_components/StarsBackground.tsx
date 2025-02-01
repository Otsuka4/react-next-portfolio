"use client";
import { useEffect, useState } from "react";
import styles from "./StarsBackground.module.css";

export default function StarsBackground() {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [shootingStars, setShootingStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // 通常の星を生成
    const numStars = 100;
    const starElements = Array.from({ length: numStars }).map((_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 3;

      return (
        <div
          key={`star-${i}`}
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

  useEffect(() => {
    const generateShootingStar = () => {
      const xStart = Math.random() * 100;
      const delay = Math.random() * 5; // 0〜5秒のランダムなタイミングで発生

      const shootingStar = (
        <div
          key={`shooting-${Date.now()}`}
          className={styles.shootingStar}
          style={{
            left: `${xStart}vw`,
            top: `-10vh`,
            animationDelay: `${delay}s`,
          }}
        />
      );

      setShootingStars((prev) => [...prev.slice(-4), shootingStar]); // 最大5個の流れ星を維持
    };

    const interval = setInterval(generateShootingStar, 3000); // 3秒ごとに流れ星を生成

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.stars}>{stars}{shootingStars}</div>;
}
