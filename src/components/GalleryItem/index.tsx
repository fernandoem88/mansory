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
  const [ref, inView] = useInView<HTMLLIElement>({
    getContainerElement,
    margin: "50px 0px",
  });
  const { alt, width, height, src } = photo;
  const aspectRatio = width / height;
  const reverseRatio = 1 / aspectRatio;

  return (
    <Card
      ref={ref}
      $aspectRatio={aspectRatio}
      $rowSpan={Math.ceil(reverseRatio * 10)}
      data-inview={inView ? "true" : undefined}
      data-testid="mansory-card"
    >
      {inView && (
        <CardButton onClick={onClick}>
          <Img
            alt={alt}
            src={getDefaultPhotoSrc(src)}
            loading="lazy"
            width={width}
            height={height}
          />
        </CardButton>
      )}
    </Card>
  );
};
