import { Container, Gallery, MessageText } from "./styled";
import type { PhotoItem } from "@/typings";
import { useEffect, useRef } from "react";
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
  const isMessageShown = isLoading || error || noItems;

  useEffect(() => {
    const galleryEl = galleryRef.current;

    if (!galleryEl || isMessageShown) return;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;

      const computedStyle = window.getComputedStyle(galleryEl);
      const columnWidth = computedStyle
        .getPropertyValue("grid-template-columns")
        .split(" ")[0];

      galleryEl.style.setProperty(
        "--mansory-auto-row",
        `calc(${columnWidth} / 10)`
      );
    });

    observer.observe(galleryEl);

    return () => {
      observer.unobserve(galleryEl);
    };
  }, [isMessageShown]);

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
