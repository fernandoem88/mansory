"use client";

import {
  doGetPhotos,
  type Params,
} from "@/lib/api-services/actions/doGetPhotos";
import { useState } from "react";
import useSWR from "swr";
import { Mansory } from "@/components/Mansory";

export const GalleryContainer = () => {
  const [search] = useState<Params>({
    query: "nature",
    page: 1,
    perPage: 25,
  });
  const { data } = useSWR(["photos", search], () => doGetPhotos(search));

  return <Mansory photos={data?.photos ?? []}></Mansory>;
};
