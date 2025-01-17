"use server";

import { ResponseSuccess } from "@/typings";

const API_KEY = process.env["PEXELS_API_KEY"];
const BASE_URL = "https://api.pexels.com/v1/search";

export interface Params {
  page?: number;
  perPage?: number;
  query: string;
}

export const doGetPhotos = async ({
  page = 1,
  perPage = 10,
  query,
}: Params) => {
  const search = new URLSearchParams({
    query,
    page: String(page),
    per_page: String(perPage),
  });

  const url = `${BASE_URL}?${search.toString()}`;
  const response = await fetch(url, {
    next: { revalidate: 3 * 60 }, // every 3 minutes
    headers: {
      Authorization: `${API_KEY}`,
    },
  });

  const data = await response.json();

  if ("code" in data) {
    throw new Error(`${data.status} Error: ${data.code}`);
  }

  return data as ResponseSuccess;
};
