import useSWRInfinite from "swr/infinite";
import { doGetPhotos } from "../actions/doGetPhotos";
import { ResponseSuccess } from "@/typings";

const PAGE_SIZE = 25;

export const useGetPhotos = (query: string) => {
  const swr = useSWRInfinite((index, previous?: ResponseSuccess) => {
    const page = index + 1;
    const params = { page, query, perPage: PAGE_SIZE };

    if (!previous) return params;

    const totalPages = Math.ceil(previous.total_results / PAGE_SIZE);

    if (page === totalPages) return null;

    return { query, page, perPage: PAGE_SIZE };
  }, doGetPhotos);

  return swr;
};
