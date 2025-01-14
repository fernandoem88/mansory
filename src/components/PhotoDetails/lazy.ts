import dynamic from "next/dynamic";

export const LazyPhotoDetails = dynamic(
  () => import("./").then((v) => v.PhotoDetails),
  { ssr: false }
);
