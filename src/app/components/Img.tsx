import React from 'react';

type ImgProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  quality?: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  fill?: boolean;
  sizes?: string;
  unoptimized?: boolean;
};

export default function Img({ src, alt, width, height, className, style, priority, loading, fill }: ImgProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', ...style }}
        loading={priority ? 'eager' : (loading ?? 'lazy')}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      loading={priority ? 'eager' : (loading ?? 'lazy')}
    />
  );
}
