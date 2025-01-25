import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

export default async function Page() {
  // microCMSからブログ投稿を取得
const blogPosts = await getMembersList({ limit : MEMBERS_LIST_LIMIT});

  return (
    <div className={styles.container}>
      {/* 自己紹介セクション */}
      <section className={styles.introSection}>
        <h1 className={styles.title}>こんにちは！私の自己紹介ページへようこそ</h1>
        <div className={styles.introContent}>
          <Image
            src="/profile.jpg"  // プロフィール画像を設定
            alt="プロフィール画像"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <div className={styles.introText}>
            <p>
              こんにちは！私は　大塚 由華　です。<br />
              このページでは私が学んでいることや趣味を紹介しています。<br />
              私は現在、専門学校で情報セキュリティについて学んでいます。<br />
              どうぞよろしくお願いします！<br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}