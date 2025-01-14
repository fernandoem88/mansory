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

export const GalleryContainer = () => {
  const [details, setDetails] = useState<PhotoItem>();
  const [search] = useState<Params>({
    query: "nature",
    page: 1,
    perPage: 25,
  });
  const { data } = useSWR(["photos", search], () => doGetPhotos(search));

  return (
    <>
      <Mansory photos={data?.photos ?? []} onOpenDetails={setDetails}></Mansory>
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
