import { useInView } from "@/hooks/useInView";

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
    <div
      ref={ref}
      style={{
        display: "flex",
        padding: 4,
        justifyContent: "center",
        gridColumn: "1 / -1",
      }}
    >
      {inView ? "Loading..." : "not loading"}
    </div>
  );
};
