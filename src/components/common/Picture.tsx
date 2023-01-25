import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

interface PictureProps {
  src: string;
  alt: string;
  className?: string;
}

const Picture: FC<
  PictureProps &
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = (props) => {
  const { src, alt, className } = props;
  return (
    <picture>
      <img {...props} src={src} alt={alt} className={className} />
    </picture>
  );
};

export default Picture;
