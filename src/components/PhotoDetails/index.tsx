"use client";

import type { PhotoItem } from "@/typings";
import { UiModalHeader } from "../../lib/ui/ModalHeader";
import { UiModalContent } from "../../lib/ui/ModalContent";
import { UiModalFooter } from "../../lib/ui/ModalFooter";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";
import { Content, DetailsFooter, Img, ImgWrapper } from "./styled";
import { ReactNode } from "react";

interface Props {
  photo: PhotoItem;
  closeBtn?: ReactNode;
}

export const PhotoDetails = ({ photo, closeBtn }: Props) => {
  const { photographer, alt, src, width, height, photographer_url } = photo;
  const aspectRatio = +(width / height).toFixed(2);

  return (
    <>
      <UiModalHeader title={""} action={closeBtn} />
      <UiModalContent>
        <Content $aspectRatio={aspectRatio}>
          <ImgWrapper
            $aspectRatio={aspectRatio}
            $bgSrc={getDefaultPhotoSrc(src)}
            onClick={() => window.location.reload()}
          >
            <Img
              src={src.original}
              alt={alt}
              loading="lazy"
              $aspectRatio={aspectRatio}
            />
          </ImgWrapper>
        </Content>
      </UiModalContent>
      <UiModalFooter>
        <DetailsFooter>
          <p>{alt}</p>
          <p>
            <a href={photographer_url} target="_blank">
              by {photographer}
            </a>
          </p>
        </DetailsFooter>
      </UiModalFooter>
    </>
  );
};
