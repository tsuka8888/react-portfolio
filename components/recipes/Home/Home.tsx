import React, { FC } from 'react';
import { homeContainerStyles as styles } from './home.css';
import { HomeTitle } from './HomeTitle';
import { Profile } from './Profile';

export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HomeTitle />
        <Profile />
      </div>
    </div>
  );
};
