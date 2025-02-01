import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      {/* 自己紹介セクション */}
      <section className={styles.introSection}>
        <h1 className={styles.title}>こんにちは！<br />私の自己紹介ページへようこそ</h1>
        <div className={styles.introContent}>
          <Image
            src="/Image.jpg"  // プロフィール画像を設定
            alt="プロフィール画像"
            width={250}
            height={180}
            className={styles.profileImage}
          />
          <div className={styles.introText}>
            <p>
              こんにちは！私は 大塚由華 です。<br />
              このページでは自己紹介や私の趣味を紹介しています。<br />
              どうぞよろしくお願いします！<br />
              <br/>
            </p>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>自己紹介</h2>
              <p>
              名前：大塚由華<br />
              出身：滋賀県<br />
              職業：専門学生<br />
              学校名：京都デザイン&テクノロジー専門学校<br />
              学んでいること：情報セキュリティ<br />
              専攻：ホワイトハッカー専攻<br />
              趣味：読書、ゲーム、音楽鑑賞<br />
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>学んでいること</h2>
              <p>
                現在、専門学校で情報セキュリティについて学んでいます。<br />
                セキュリティについて学ぶきっかけは、<br/>昔友達の親が乗っ取りにあい、私の家にも詐欺メールが届き、とても怖い思いをしたからです。<br />
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>趣味</h2>
              <p>
                趣味は、読書とゲーム、音楽を聴くことです。<br />
                特に、ミステリー小説や長編小説が好きです。<br />
                ゲームはホヨバースのゲーム、音楽はボカロやバンド系など色々聴いています。<br />
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>スキル</h2>
              <p>
                第一種普通免許<br />
                ワープロ2級<br />
                AI900<br />
                Microsoft Office Specialist Excel<br />
                Microsoft Office Specialist PowerPoint<br />
                </p>
              </div>

              <div className={styles.section}>
              <h2 className={styles.sectionTitle}>製作した物</h2>
              <p>
                自己紹介ページ<br />
                <a href= "https://otsuka4.github.io/about-me/" >https://otsuka4.github.io/about-me/</a><br />
                <br />
                ポケモン図鑑<br />
                <a href= "https://otsuka4.github.io/react-pokemon-zukan/" >https://otsuka4.github.io/react-pokemon-zukan/</a>
                <br />
                <br />
                Intel企業プロジェクト作成中<br />
                </p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
