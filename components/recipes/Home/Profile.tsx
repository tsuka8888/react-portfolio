import { FC } from 'react';

// import HumanCamera from '../../../public/assets/humanCamera.svg';
import { profileStyles as styles } from './profile.css';

export const Profile: FC = () => (
  <div>
    <div className={styles.nameContainer}>
      <p className={styles.textSmall}>山本 司</p>
      <p className={styles.textLarge}>YAMAMOTO TSUKASA</p>
      <p className={styles.textSmall}>MEN</p>
    </div>
    <div className={styles.descriptionContainer}>
      <p className={styles.textSmall}>
        1994年 12月、滋賀県に生まれる。
        <br />
        専門学校でプログラミングを学び、地元のIT会社へ就職し、
        WEB開発に出会う。そこから興味を持ち始め、2020年に
        WEB開発会社へ転職し、フロントエンドエンジニアとして
        プロジェクトに参画中。ReactやNext.jsでの開発が得意。
      </p>
    </div>
    <div>
    </div>
  </div>
);
