import { FC, ReactNode } from 'react';
import { Navigation } from '../organisms/Navigation';
import { homeTemplateStyles as styles } from './homeTemplate.css';

interface HomeTemplateProps {
  children: ReactNode;
}
export const HomeTemplate: FC<HomeTemplateProps> = ({ children }) => {
  return (
    <>
      <header>
        <div className={styles.title}>{'Yamamoto Tsukasa\nPortfolio'}</div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};
