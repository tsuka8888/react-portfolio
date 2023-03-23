import React, { FC } from 'react';
import { homeContainerStyles as styles } from './homeContainer.css';
import { HomeTitle } from './HomeTitle';

export const HomeContainer: FC = () => {
  return (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.homeTitle}>
        <HomeTitle />
      </div>
    </div>
  </div>
  );
};
