import type { PhotoItem } from "@/typings";
import { Card, CardButton, Img } from "./styled";
import { useInView } from "@/hooks/useInView";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";

interface Props {
  getContainerElement: () => HTMLElement | null;
  photo: PhotoItem;
}

export const GalleryItem = ({ photo, getContainerElement }: Props) => {
  const [ref, inView] = useInView<HTMLLIElement>({
    getContainerElement,
    margin: "25px 0px",
  });
  const { alt, width, height, src } = photo;
  const aspectRatio = +(width / height).toFixed(2);
  const reverseRatio = +(1 / aspectRatio).toFixed(2);

  return (
    <Card
      ref={ref}
      $aspectRatio={aspectRatio}
      $rowSpan={Math.ceil(reverseRatio * 10)}
      data-inview={inView ? "true" : undefined}
      data-testid="mansory-card"
    >
      {inView && (
        <CardButton href={`/photos/${photo.id}`}>
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
