"use client";

import { useMemo, useState } from "react";
import { Mansory } from "@/components/Mansory";
import { Root } from "./styled";
import { SearchFilter } from "@/components/SearchFilter";
import { getPageDetails } from "@/lib/utils/getPageDetails";
import { useGetPhotos } from "@/lib/api-services/hooks/useGetPhotos";

export const GalleryContainer = () => {
  const [query, setQuery] = useState("nature");
  const { data, isLoading, error, setSize } = useGetPhotos(query);

  const { photos, pageDetails } = useMemo(() => {
    const pageDetails = getPageDetails(data?.slice(-1)?.[0]);
    const photos = (data ?? []).flatMap((result) => result.photos);
    return { photos, pageDetails };
  }, [data]);

  const handleLoadMore = () => {
    if (!pageDetails.hasMorePages) return;
    setSize((page) => page + 1);
  };

  return (
    <Root>
      <SearchFilter search={query} onChange={setQuery} />
      <Mansory
        photos={photos}
        isLoading={isLoading}
        error={error}
        hasMorePages={pageDetails.hasMorePages}
        onLoadMore={handleLoadMore}
      />
    </Root>
  );
};
