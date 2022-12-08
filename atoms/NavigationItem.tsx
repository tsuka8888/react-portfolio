import { FC, ReactNode } from 'react';
import { navigationItem } from './navigationItem.css';

interface NavigationItemProps {
  children: ReactNode;
  onClick?: () => void;
}
export const NavigationItem: FC<NavigationItemProps> = ({
  children,
  onClick,
}) => {
  return (
    <li className={navigationItem.container}>
      <a onClick={onClick}>{children}</a>
    </li>
  );
};
