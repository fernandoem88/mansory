import { PhotoSrc } from "@/typings";
// import { detectNetworkSpeed } from "./detectNetworkSpeed";

/** pick the default src that will be fetched and shown in the mansory grid. */
export const getDefaultPhotoSrc = (src: PhotoSrc) => {
  //   const network = detectNetworkSpeed();
  // use the medium size src for fast connection
  //   if (network === "fast" || network === "very-fast") return src.medium;
  //   return src.small; // use the small media size src for slow connection
  return src.medium;
};
