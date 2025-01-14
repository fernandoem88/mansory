import { Container, Gallery, MessageText } from "./styled";
import type { PhotoItem } from "@/typings";
import { useRef } from "react";
import { GalleryItem } from "../GalleryItem";

interface Props {
  isLoading?: boolean;
  error?: string;
  photos: PhotoItem[];
  onOpenDetails: (photo: PhotoItem) => void;
}

export const Mansory = ({ photos, onOpenDetails, isLoading, error }: Props) => {
  const ref = useRef(null);
  const noItems = !photos.length;
  const isMessageShown = isLoading || error || noItems;

  return (
    <Container ref={ref}>
      {isMessageShown && (
        <MessageText>
          {isLoading ? "Please wait..." : error ? error : "no data found!"}
        </MessageText>
      )}
      {!isMessageShown && (
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
      )}
    </Container>
  );
};
