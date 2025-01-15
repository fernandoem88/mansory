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
  const [ref, inView] = useInView<null>({
    getContainerElement,
    margin: "80px 0px",
  });
  const { width, height } = photo;
  const aspectRatio = width / height;
  const reverseRatio = 1 / aspectRatio; // height / width;

  return (
    <Card
      ref={ref}
      $aspectRatio={aspectRatio}
      $rowSpan={Math.ceil(reverseRatio * 10)}
      data-inview={inView ? "true" : undefined}
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
