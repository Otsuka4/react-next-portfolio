import Image from 'next/image';
import styles from './index.module.css';
import StarsBackground from "@/app/_components/StarsBackground"; 

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className={styles.container}>
      <StarsBackground /> {/* ✅ ここで背景を適用 */}
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>

    </section>
  );
}