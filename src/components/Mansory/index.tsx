import { Container, Gallery, MessageText } from "./styled";
import type { PhotoItem } from "@/typings";
import { useCallback, useRef } from "react";
import { GalleryItem } from "../GalleryItem";
import { LoadMore } from "../LoadMore";

interface Props {
  isLoading?: boolean;
  error?: string;
  photos: PhotoItem[];
  onLoadMore?: () => void;
  hasMorePages?: boolean;
}

export const Mansory = ({
  photos,
  isLoading,
  error,
  onLoadMore,
  hasMorePages,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLUListElement | null>(null);
  const noItems = !photos.length;
  const isMessageShown = isLoading || !!error || noItems;

  const getContainer = useCallback(() => ref.current, []);

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
                getContainerElement={getContainer}
              />
            );
          })}
          {hasMorePages && !isLoading && (
            <LoadMore getContainerElement={getContainer} onClick={onLoadMore} />
          )}
        </Gallery>
      )}
    </Container>
  );
};
