import Image from 'next/image';
import manSrc from '../../public/assets/tsukasa.png';
import { Title } from '../designSystems/Title';

export const Profile = () => (
  <div className="about">
    <Title title='ABOUT' subTitle='このサイトと私について' />
    <div className="contents">
      <div className="about-description">
        このサイトはフロントエンドエンジニア 山本司のポートフォリオサイトです。
        <br />
        私のことや得意なことの紹介をしています。
        <br />
        <br />
        <br />
        <p className="name">山本 司</p>
        <p className="description">
          1994年生まれ&nbsp;&nbsp;&nbsp;&nbsp;28歳
          <br />
          職業フロントエンドエンジニア
          <br />
          IT業界歴 7年目&nbsp;&nbsp;&nbsp;&nbsp; Web開発歴 4年目
          <br />
          <br />
          2013年〜 大阪のコンピュータ系専門学校へ入学し、プログラミングを学ぶ
          <br />
          2017年〜
          専門学校を卒業し、地元のIT会社に就職。Web開発の現場に配属される
          <br />
          2021年〜 Web開発に専念したいという思いから、Web開発会社へ転職
          <br />
          <br />
          現在はReactやNext.jsを用いたフロントエンド開発に携わっています。
        </p>
      </div>
      <div className="about-image">
        <Image src={manSrc} alt="man" fill className="object-contain" />
      </div>
    </div>
  </div>
);
