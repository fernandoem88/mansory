"use client";

import { doGetPhotos } from "@/lib/api-services/actions/doGetPhotos";
import { useMemo, useState } from "react";
import { Mansory } from "@/components/Mansory";
import { UiModalPaper } from "@/lib/ui/ModalPaper";
import { PhotoItem, ResponseSuccess } from "@/typings";
import { LazyPhotoDetails } from "@/components/PhotoDetails/lazy";
import { Root } from "./styled";
import { SearchFilter } from "@/components/SearchFilter";
import useSWRInfinite from "swr/infinite";
import { getPageDetails } from "@/lib/utils/getPageDetails";

export const GalleryContainer = () => {
  const [details, setDetails] = useState<PhotoItem>();
  const [query, setQuery] = useState("nature");

  const { data, isLoading, size, setSize, error } = useSWRInfinite(
    (index, previous?: ResponseSuccess) => {
      const page = index + 1;
      const params = { page, query, perPage: 25 };

      if (!previous) return params;

      const totalPages = Math.ceil(previous.total_results / 25);

      if (page === totalPages) return null;

      return { query, page, perPage: 25 };
    },
    doGetPhotos
  );

  const { photos, pageDetails } = useMemo(() => {
    const pageDetails = getPageDetails(data?.slice(-1)?.[0]);
    const photos = (data ?? []).flatMap((result) => result.photos);
    return { photos, pageDetails };
  }, [data]);

  return (
    <>
      <Root>
        <SearchFilter search={query} onChange={setQuery} />
        <Mansory
          photos={photos}
          onOpenDetails={setDetails}
          isLoading={isLoading}
          error={error}
          hasMorePages={pageDetails.hasMorePages}
          onLoadMore={() => {
            if (!pageDetails.hasMorePages) return;
            setSize(size + 1);
          }}
        />
      </Root>
      <UiModalPaper open={!!details} onClose={() => setDetails(undefined)}>
        {details && (
          <LazyPhotoDetails
            photo={details}
            onClose={() => setDetails(undefined)}
          />
        )}
      </UiModalPaper>
    </>
  );
};
