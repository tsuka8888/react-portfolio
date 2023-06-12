import React, { FC } from 'react';
import topSrc from '../../public/assets/profile.jpg';
import { Profile } from './Profile';
import { Footer } from '../designSystems/Footer';
import Image from 'next/image';
import arrow from '../../public/assets/arrow.svg';

export const Home: FC = () => {
  return (
    <div id="home" className="home">
      {/* 背景画像 */}
      <div className="home-background">
        <Image src={topSrc} alt="profile" fill className="object-cover" />
        <div className="home-background-logo">
          <h1>T</h1>
          <p>
            yamamoto tsukasa
            <br />
            portpolio website.
          </p>
        </div>
        <div className="image-header-arrow">
          <Image src={arrow} alt="arrow" fill className="object-contain" />
        </div>
      </div>
      <div className="home-contents">
        {/* 自己紹介 */}
        <div className="home-about home-item">
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};
