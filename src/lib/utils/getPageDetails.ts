import type { ResponseSuccess } from "@/typings";

export const getPageDetails = (response?: Omit<ResponseSuccess, "photos">) => {
  if (!response)
    return { page: 1, totalPages: 1, hasMorePages: false, count: 0 };

  const { page, per_page, total_results } = response;
  const totalPages = Math.ceil(total_results / per_page);

  return {
    page,
    totalPages,
    hasMorePages: page < totalPages,
    count: total_results,
  };
};
