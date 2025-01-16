import { PhotoDetailsContainer } from "@/containers/PhotoDetailsContainer";
import { doGetPhotoById } from "@/lib/api-services/actions/doGetPhotoById";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import style from "./photo.module.css";

interface Props {
  params: Promise<Record<"photoId", string>>;
}

export async function generateMetadata(props: {
  params: Promise<Record<"photoId", string>>;
}) {
  const { photoId } = await props.params;
  const photo = await doGetPhotoById(photoId);
  return {
    title: `Photo by ${photo.photographer}`,
    description: photo.alt,
  };
}

export default async function ModalPhotoPage({ params }: Props) {
  const { photoId } = await params;
  const photo = await doGetPhotoById(photoId);
  return (
    <StyledComponentsRegistry>
      <div className={style.photo}>
        <PhotoDetailsContainer photo={photo} />
      </div>
    </StyledComponentsRegistry>
  );
}
