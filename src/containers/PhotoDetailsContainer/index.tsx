"use client";

import { UiButton } from "@/lib/ui/Button";
import { useRouter } from "next/navigation";
import { CloseBtnText, NotFound } from "./styled";
import { PhotoItem } from "@/typings";
import { PhotoDetails } from "@/components/PhotoDetails";

interface Props {
  photo: PhotoItem | null;
  isModal?: boolean;
}

export const PhotoDetailsContainer = ({ photo, isModal }: Props) => {
  const router = useRouter();

  const closeButton = (
    <UiButton
      size="lg"
      variant="contained"
      color="primary"
      rounded
      onClick={() => {
        if (isModal) router.back();
        else router.push("/");
      }}
    >
      <CloseBtnText>X</CloseBtnText>
    </UiButton>
  );

  if (!photo)
    return (
      <NotFound>
        {closeButton}
        <p>Oooops, Nothing Found here!</p>
      </NotFound>
    );
  return <PhotoDetails photo={photo} closeBtn={closeButton} />;
};
