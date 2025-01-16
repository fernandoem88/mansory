import { PhotoDetailsContainer } from "@/containers/PhotoDetailsContainer";
import { doGetPhotoById } from "@/lib/api-services/actions/doGetPhotoById";
import { UiModalPaper } from "@/lib/ui/ModalPaper";

interface Props {
  params: Promise<Record<"photoId", string>>;
}

export default async function ModalPhotoPage({ params }: Props) {
  if (!params) return null;
  const { photoId } = await params;
  const photo = await doGetPhotoById(photoId);

  return (
    <UiModalPaper open={!!photoId}>
      <PhotoDetailsContainer photo={photo} isModal />
    </UiModalPaper>
  );
}
