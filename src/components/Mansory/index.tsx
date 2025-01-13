import { Container, Gallery } from "./styled";
import type { PhotoItem } from "@/typings";
import { useRef } from "react";
import { GalleryItem } from "../GalleryItem";

interface Props {
  photos: PhotoItem[];
}

export const Mansory = ({ photos }: Props) => {
  const ref = useRef(null);
  return (
    <Container ref={ref}>
      <Gallery>
        {photos.map((photo, index) => {
          return (
            <GalleryItem
              key={photo.id}
              index={index}
              photo={photo}
              getContainerElement={() => ref.current}
            />
          );
        })}
      </Gallery>
    </Container>
  );
};
