import React, { FC } from 'react';
import topSrc from '../../public/assets/profile.jpg';
import { Profile } from './Profile';
import { Footer } from '../designSystems/Footer';
import Image from 'next/image';
import arrow from '../../public/assets/arrow.svg';
import { Title } from '../designSystems/Title';

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
            portfolio website.
          </p>
        </div>
        <div className="image-header-arrow">
          <Image src={arrow} alt="arrow" fill className="object-contain" />
        </div>
      </div>
      <div className="home-contents">
        {/* 自己紹介 */}
        <section className="home-about home-item">
          <Profile />
        </section>
        <section className="home-skill home-item">
          <Title title="SKILL" subTitle="私の得意なこと" />
          <p className="sub-title">フロントエンド</p>
          <p>
            React、Next.js、Typescriptを用いたフロントエンド開発が得意です。
          </p>
          <br />
          <p className="sub-title">バックエンド</p>
          <p>
            バックエンド開発も可能で、現在の案件ではTypescriptを用いて行なっています。
          </p>
          <br />
          <p className="sub-title">インフラ</p>
          <p>
            インフラはAWSで構築することが可能です。
            <br />
            S3、Cloudfront等を用いたサーバレス環境を構築することができます。
            <br />
            直近の案件では、AWS CDKを使用していました。
          </p>
          <br />
          <p className="sub-title">保有資格</p>
          <ul>
            <li>基本情報技術者</li>
            <li>AWSクラウドプラクティショナー</li>
            <li>AWSソリューションアーキテクトアソシエイト</li>
          </ul>
        </section>
        <section className="home-skill home-item">
          <Title title="CONTACT" subTitle="私に連絡をする" />
          お仕事の依頼などございましたら、メールやTwitterのDMにてお待ちしています。
          <br />
          <br />
          <div className="contents">
           <dt className='sub-title'>メールアドレス</dt>
           <dd>tks.ohtsu.fw77@gmail.com</dd>
          <br />
           <dt  className='sub-title'>Twitter</dt>
           <dd>tsuka8888</dd>
          <br />
           <dt className='sub-title'>Github</dt>
           <dd>tsuka8888</dd>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
