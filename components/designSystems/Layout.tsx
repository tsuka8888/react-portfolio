import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  id?: string;
  className?: string;
  isHiddenFooter?: boolean;
}

export const Layout = ({
  children,
  id,
  className,
  isHiddenFooter = false,
}: LayoutProps) => (
  <div id={id} className={className}>
    {/* <Header /> */}
    <div className="layout-contents">{children}</div>
    {!isHiddenFooter && <Footer />}
  </div>
);
