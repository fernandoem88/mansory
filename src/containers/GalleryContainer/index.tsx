"use client";

import {
  doGetPhotos,
  type Params,
} from "@/lib/api-services/actions/doGetPhotos";
import { useState } from "react";
import useSWR from "swr";
import { Mansory } from "@/components/Mansory";
import { UiModalPaper } from "@/lib/ui/ModalPaper";
import { PhotoItem } from "@/typings";
import { LazyPhotoDetails } from "@/components/PhotoDetails/lazy";
import { UiPagination } from "@/lib/ui/Pagination";
import { Root } from "./styled";
import { SearchFilter } from "@/components/SearchFilter";

export const GalleryContainer = () => {
  const [details, setDetails] = useState<PhotoItem>();
  const [search, setSearch] = useState<Params>({
    query: "nature",
    page: 1,
    perPage: 25,
  });
  const { data, isLoading, error } = useSWR(["photos", search], () =>
    doGetPhotos(search)
  );

  return (
    <>
      <Root>
        <SearchFilter
          search={search.query}
          onChange={(query) => setSearch((prev) => ({ ...prev, query }))}
        />
        <Mansory
          photos={data?.photos ?? []}
          onOpenDetails={setDetails}
          isLoading={isLoading}
          error={error}
        />
        <UiPagination
          count={data?.total_results ?? 1}
          onChange={(page) => setSearch((prev) => ({ ...prev, page }))}
          page={data?.page ?? 0}
          perPage={data?.per_page ?? 10}
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
