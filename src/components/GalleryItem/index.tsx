import type { PhotoItem } from "@/typings";
import { Card, Img } from "./styled";
import { useInView } from "@/hooks/useInView";

interface Props {
  getContainerElement: () => HTMLElement | null;
  photo: PhotoItem;
}

export const GalleryItem = ({ photo, getContainerElement }: Props) => {
  const [ref, inView] = useInView<null>({ getContainerElement });

  return (
    <Card
      ref={ref}
      $aspectRatio={photo.width / photo.height}
      // $bgSrc={photo.src.small}
    >
      {inView && (
        <button
          style={{
            width: "100%",
            height: "100%",
            all: "unset",
            display: "inline-block",
            cursor: "pointer",
          }}
        >
          <Img
            alt={photo.alt}
            src={photo.src.large}
            loading="lazy"
            width={photo.width}
            height={photo.height}
          />
        </button>
      )}
    </Card>
  );
};
