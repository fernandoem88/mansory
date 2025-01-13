import type { PhotoItem } from "@/typings";
import { Card, Img } from "./styled";
import { useInView } from "@/hooks/useInView";

interface Props {
  getContainerElement: () => HTMLElement | null;
  photo: PhotoItem;
  index: number;
}

export const GalleryItem = ({ photo, index, getContainerElement }: Props) => {
  const [ref, inView] = useInView<null>({ getContainerElement });

  return (
    <Card
      ref={ref}
      tabIndex={index}
      $aspectRatio={photo.width / photo.height}
      // $bgSrc={photo.src.small}
    >
      {inView && (
        <Img
          alt={photo.alt}
          src={photo.src.large}
          loading="lazy"
          width={photo.width}
          height={photo.height}
        />
      )}
    </Card>
  );
};
