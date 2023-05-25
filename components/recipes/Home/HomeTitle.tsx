import Image from 'next/image';
import React from 'react';
import { homeTitleStyles as styles } from './homeTitle.css';

export const HomeTitle = () => {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <div className={styles.header}>
        <div className={styles.name}>
          <p className={styles.position}>Frontend Engineer</p>
          <h1 className={styles.nameH1}>YAMAMOTO TSUKASA</h1>
        </div>
      </div>
      {/* キャラクター */}
      {/* <div className={styles.character}>
        <img
          src="assets/sky.jpg"
          alt="yusha"
          className={styles.characterImage}
        />
      </div> */}
      <div className={styles.main}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </div>
  );
};
