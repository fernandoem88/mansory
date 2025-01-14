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

  return (
    <Card ref={ref} $aspectRatio={photo.width / photo.height}>
      {inView && (
        <CardButton onClick={onClick}>
          <Img
            alt={photo.alt}
            src={getDefaultPhotoSrc(photo.src)}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
        </CardButton>
      )}
    </Card>
  );
};
