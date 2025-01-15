import type { PhotoItem } from "@/typings";
import { UiModalHeader } from "../../lib/ui/ModalHeader";
import { UiModalContent } from "../../lib/ui/ModalContent";
import { UiModalFooter } from "../../lib/ui/ModalFooter";
import { UiButton } from "../../lib/ui/Button";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";
import { CloseBtnText, DetailsFooter, Img, ImgWrapper } from "./styled";

interface Props {
  photo: PhotoItem;
  onClose?: () => void;
}

export const PhotoDetails = ({ photo, onClose }: Props) => {
  const { photographer, alt, src, width, height, photographer_url } = photo;

  return (
    <>
      <UiModalHeader
        title={""}
        action={
          <UiButton
            size="lg"
            variant="contained"
            color="primary"
            rounded
            onClick={() => onClose?.()}
          >
            <CloseBtnText>X</CloseBtnText>
          </UiButton>
        }
      />
      <UiModalContent>
        <ImgWrapper
          $aspectRatio={width / height}
          $bgSrc={getDefaultPhotoSrc(src)}
        >
          <Img
            src={src.original}
            alt={alt}
            loading="lazy"
            $aspectRatio={width / height}
          />
        </ImgWrapper>
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
