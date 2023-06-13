import { ReactNode } from 'react';

interface TitleProps {
  title: string
  subTitle: string
}

export const Title = ({ title, subTitle }: TitleProps) => (
  <div className="title">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
);
