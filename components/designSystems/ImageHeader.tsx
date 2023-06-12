import Image, { StaticImageData } from 'next/image';
import arrow from '../../public/assets/arrow.svg';
import { ReactNode } from 'react';

interface ImageHeaderProps {
  src: StaticImageData;
  isShowArrow?: boolean;
  children?: ReactNode;
}

export const ImageHeader = ({
  src,
  isShowArrow = false,
  children,
}: ImageHeaderProps) => (
  <>
    <div id="image-header" className="image-header">
      <Image src={src} alt="profile" fill className="object-cover" />
      {isShowArrow && (
        <div className="image-header-arrow">
          <Image src={arrow} alt="arrow" fill className="object-contain" />
        </div>
      )}
    </div>
  </>
);
