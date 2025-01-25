import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
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
              こんにちは！私は　ああああ　です。<br />
              このページでは自己紹介や私の趣味を紹介しています。<br />
              どうぞよろしくお願いします！<br />
            </p>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>自己紹介</h2>
              <p>
                名前：ああああ<br />
                出身：滋賀県<br />
                職業：専門学生<br />
                学校名：京都デザイン&テクノロジー専門学校<br />
                学んでいること：情報セキュリティ<br />
                趣味：読書、ゲーム、音楽鑑賞<br />
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>学んでいることについて</h2>
              <p>
                現在、専門学校で情報セキュリティについて学んでいます。<br />
                セキュリティに関して興味を持ったのは、小学生の時です。<br/>
                友達の親が乗っ取りにあい、私の家にもカードを買ってきて欲しい。
                というメールが届き、とても怖い思いをしたことがきっかけです。<br />
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>趣味について</h2>
              <p>
                趣味は、読書とゲーム、音楽を聴くことです。<br />
                特に、ミステリー小説や長編小説が好きです。<br />
                ゲームはホヨバースのゲーム、音楽はボカロやバンドなど色々聴いています。<br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
