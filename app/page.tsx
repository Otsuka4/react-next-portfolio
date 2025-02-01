import styles from "./page.module.css";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import StarsBackground from "@/app/_components/StarsBackground"; // ✅ ここを修正

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className={styles.top}>
        <StarsBackground /> {/* ✅ ここで背景を適用 */}
        <div>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.description}>
            これはotsukaのポートフォリオです。
          </p>
        </div>
        
      </section>

      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
