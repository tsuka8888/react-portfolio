import Image from 'next/image';
import React from 'react';

import { homeTitleStyles as styles } from './homeTitle.css';

export const HomeTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{'Yamamoto\nTsukasa'}</p>
        <p className={styles.subTitle}>- frontend engineer -</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/humanHello.svg"
          alt="human"
          width={200}
          height={150}
        />
      </div>
    </div>
  );
};
