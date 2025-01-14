import type { PhotoItem } from "@/typings";
import { UiModalHeader } from "../../lib/ui/ModalHeader";
import { UiModalContent } from "../../lib/ui/ModalContent";
import { UiModalFooter } from "../../lib/ui/ModalFooter";
import { FONT_SIZES } from "@/lib/theme";
import { UiButton } from "../../lib/ui/Button";
import { getDefaultPhotoSrc } from "@/lib/utils/getDefaultPhotoSrc";

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
            <div style={{ fontSize: 24, fontWeight: 500 }}>X</div>
          </UiButton>
        }
      />
      <UiModalContent>
        <div
          style={{
            aspectRatio: width / height,
            height: "100%",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            backgroundImage: `url(${getDefaultPhotoSrc(src)})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line */}
          <img
            src={src.original}
            alt={alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: photo.width / photo.height,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </UiModalContent>
      <UiModalFooter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <p style={{ fontSize: FONT_SIZES.body1 }}>{alt}</p>
          <p style={{ fontSize: FONT_SIZES.h6 }}>
            <a href={photographer_url} target="_blank">
              by {photographer}
            </a>
          </p>
        </div>
      </UiModalFooter>
    </>
  );
};
