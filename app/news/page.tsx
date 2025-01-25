import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import SearchField from '@/app/_components/SearchField';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css'; // CSSモジュールをインポート

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <SearchField />
        <NewsList news={news} />
        <Pagination totalCount={totalCount} />
      </div>
    </div>
  );
}
