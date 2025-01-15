import { Container, Gallery, MessageText } from "./styled";
import type { PhotoItem } from "@/typings";
import { useRef } from "react";
import { GalleryItem } from "../GalleryItem";
import { LoadMore } from "../LoadMore";

interface Props {
  isLoading?: boolean;
  error?: string;
  photos: PhotoItem[];
  onOpenDetails: (photo: PhotoItem) => void;
  onLoadMore?: () => void;
  hasMorePages?: boolean;
}

export const Mansory = ({
  photos,
  onOpenDetails,
  isLoading,
  error,
  onLoadMore,
  hasMorePages,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLUListElement | null>(null);
  const noItems = !photos.length;
  const isMessageShown = isLoading || !!error || noItems;

  return (
    <Container ref={ref}>
      {isMessageShown && (
        <MessageText>
          {isLoading ? "Please wait..." : error ? error : "no data found!"}
        </MessageText>
      )}
      {!isMessageShown && (
        <Gallery ref={galleryRef}>
          {photos.map((photo, index) => {
            return (
              <GalleryItem
                key={`${photo.id}_${index}`}
                photo={photo}
                getContainerElement={() => ref.current}
                onClick={() => onOpenDetails(photo)}
              />
            );
          })}
          {hasMorePages && !isLoading && (
            <LoadMore
              getContainerElement={() => ref.current}
              onClick={onLoadMore}
            />
          )}
        </Gallery>
      )}
    </Container>
  );
};
