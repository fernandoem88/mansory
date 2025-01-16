"use server";

import { PhotoItem } from "@/typings";

const API_KEY = process.env["PEXELS_API_KEY"];
const BASE_URL = "https://api.pexels.com/v1/photos";

export const doGetPhotoById = async (photoId: string) => {
  const url = `${BASE_URL}/${photoId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if ("code" in data) {
    throw new Error(`${data.status} Error: ${data.code}`);
  }

  return data as PhotoItem;
};
