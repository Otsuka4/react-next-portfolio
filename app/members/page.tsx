import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import { MEMBERS_LIST_LIMIT } from '@/app/_constants';
import styles from './page.module.css';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';

export default async function Page() {
  // microCMSからブログ投稿を取得
const blogPosts = await getMembersList();

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
              このページでは自己紹介や私の趣味を紹介しています。<br />
              どうぞよろしくお願いします！<br />
            </p>

            <h2>自己紹介</h2>
            <p>
              私は、滋賀県出身の専門学生です。<br />
              専門学校では情報セキュリティを学んでいます。<br />
              <br />
            </p>

            <h2>学んでいること</h2>
            <p>
              現在、専門学校で情報セキュリティについて学んでいます。<br />
              セキュリティについて学ぶきっかけは、小学生の時、友達の親が乗っ取りにあい、私の家にもカードを買ってきて欲しい。
              とメールが届き、とても怖い思いをしたからです。<br />
              今後は、セキュリティの知識を活かして、被害を少しでも減らす仕事をしたいと思っています。<br />
            </p>

            <h2>趣味</h2>
            <p>
              趣味は、読書とゲーム、音楽を聴くことです。<br />
              特に、ミステリー小説や長編小説が好きです。<br />
              ゲームはホヨバースのゲーム、音楽はボカロやバンドなど色々聴いています。<br />
              おすすめの物があればぜひ教えてください！<br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}