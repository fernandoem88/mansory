import { useInView } from "@/hooks/useInView";
import { LoadMoreWrapper } from "./styled";

interface Props {
  getContainerElement: () => HTMLElement | null;
  onClick?: () => void;
}

export const LoadMore = ({ getContainerElement, onClick }: Props) => {
  const [ref, inView] = useInView<null>({
    getContainerElement,
    onInViewChange: (isInView) => {
      if (!isInView) return;
      onClick?.();
    },
  });

  return (
    <LoadMoreWrapper ref={ref}>{inView ? "Loading..." : ""}</LoadMoreWrapper>
  );
};
