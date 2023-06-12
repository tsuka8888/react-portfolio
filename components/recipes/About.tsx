import { FC } from 'react';
import { Layout } from '../designSystems/Layout';
import { ImageHeader } from '../designSystems/ImageHeader';
import { Title } from '../designSystems/Title';
import profile from '../../public/assets/profile.jpg';
import { TitleBackground } from '../designSystems/TitleBackground';

export const About: FC = () => (
  <Layout>
    <div id="about">
      <div className="about">
        <ImageHeader src={profile}>
          <div className="about-name">
            <p>山本 司</p>
            <p>YAMAMOTO TSUKASA</p>
            <p>MAN</p>
          </div>
          <p className="about-description">
            1994年 12月、滋賀県に生まれる。
            <br />
            <br />
            専門学校でプログラミングを学び、地元のIT会社へ就職し、Web開発に出会う。
            <br />
            そこからWeb開発に興味を持ち始め、2020年にWeb開発会社へ転職し、フロントエンドエンジニアとして
            プロジェクトに参画中。
            <br />
            <br />
            ReactやNext.jsでの開発が得意。
            <br />
            <br />
          </p>
        </ImageHeader>
      </div>
      <div className="about-title">
        <TitleBackground>
          <Title variant='large'>About me</Title>
        </TitleBackground>
      </div>
    </div>
  </Layout>
);
