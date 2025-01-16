"use client";

import { UiButton } from "@/lib/ui/Button";
import { useRouter } from "next/navigation";
import { CloseBtnText } from "./styled";
import { PhotoItem } from "@/typings";
import { PhotoDetails } from "@/components/PhotoDetails";

interface Props {
  photo: PhotoItem;
}

export const PhotoDetailsContainer = ({ photo }: Props) => {
  const router = useRouter();
  return (
    <PhotoDetails
      photo={photo}
      closeBtn={
        <UiButton
          size="lg"
          variant="contained"
          color="primary"
          rounded
          onClick={() => router.back()}
        >
          <CloseBtnText>X</CloseBtnText>
        </UiButton>
      }
    />
  );
};
