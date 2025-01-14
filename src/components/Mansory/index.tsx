import { Container, Gallery } from "./styled";
import type { PhotoItem } from "@/typings";
import { useRef } from "react";
import { GalleryItem } from "../GalleryItem";

interface Props {
  photos: PhotoItem[];
  onOpenDetails: (photo: PhotoItem) => void;
}

export const Mansory = ({ photos, onOpenDetails }: Props) => {
  const ref = useRef(null);
  return (
    <Container ref={ref}>
      <Gallery>
        {photos.map((photo) => {
          return (
            <GalleryItem
              key={photo.id}
              photo={photo}
              getContainerElement={() => ref.current}
              onClick={() => onOpenDetails(photo)}
            />
          );
        })}
      </Gallery>
    </Container>
  );
};
