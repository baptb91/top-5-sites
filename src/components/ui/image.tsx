
import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const Image = ({ alt, ...props }: ImageProps) => {
  return (
    <img
      {...props}
      alt={alt}
      loading="lazy"
      className={`${props.className || ''} transition-opacity duration-300 hover:opacity-95`}
    />
  );
};

export default Image;
