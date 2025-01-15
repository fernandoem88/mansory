import type { PhotoItem } from "@/typings";
import { Card, CardButton, Img } from "./styled";
import { useInView } from "@/hooks/useInView";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";

interface Props {
  getContainerElement: () => HTMLElement | null;
  photo: PhotoItem;
  onClick?: () => void;
}

export const GalleryItem = ({ photo, getContainerElement, onClick }: Props) => {
  const [ref, inView] = useInView<null>({ getContainerElement });
  const { width, height } = photo;
  const aspectRatio = width / height;
  const gridRowRatio = height / width;

  return (
    <Card
      ref={ref}
      $aspectRatio={aspectRatio}
      $rowSpan={Math.ceil(gridRowRatio * 10)}
    >
      {inView && (
        <CardButton onClick={onClick}>
          <Img
            alt={photo.alt}
            src={getDefaultPhotoSrc(photo.src)}
            loading="lazy"
            width={width}
            height={height}
          />
        </CardButton>
      )}
    </Card>
  );
};
