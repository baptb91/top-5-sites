
import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  webpSrc?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = ({ 
  alt, 
  src, 
  webpSrc,
  width,
  height,
  className,
  loading = "lazy",
  ...props 
}: OptimizedImageProps) => {
  return (
    <>
      {webpSrc ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <source srcSet={src} type="image/png" />
          <img
            src={src}
            alt={alt}
            loading={loading}
            width={width}
            height={height}
            className={`${className || ''} transition-opacity duration-300 hover:opacity-95`}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          className={`${className || ''} transition-opacity duration-300 hover:opacity-95`}
          {...props}
        />
      )}
    </>
  );
};

export default OptimizedImage;
