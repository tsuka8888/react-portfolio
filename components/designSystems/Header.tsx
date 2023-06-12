import Image from 'next/image';
import React from 'react';
import logoSrc from '../../public/assets/logo.png';
import { Router, useRouter } from 'next/router';
import { Title } from './Title';

export const Header = () => {
  const router = useRouter();

  const onClickLi = (pageName: string) => {
    router.push(`/${pageName}`);
  };

  return (
    <header id="header">
      <div className="header">
        <div className="header-name">
          <Title variant="small">Yamamoto Tsukasa</Title>
        </div>
        <ul className="header-menu">
          <li onClick={() => onClickLi('')}>TOP</li>
          <li onClick={() => onClickLi('about')}>ABOUT</li>
          <li onClick={() => onClickLi('skill')}>SKILL</li>
          <li onClick={() => onClickLi('contact')}>CONTACT</li>
        </ul>
      </div>
    </header>
  );
};
