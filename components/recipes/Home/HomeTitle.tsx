import Image from 'next/image';
import React from 'react';

import { homeTitleStyles as styles } from './homeTitle.css';

export const HomeTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src="assets/tree.jpg" alt="トップ画像" className={styles.image}/>
      </div>
    </div>
  );
};
