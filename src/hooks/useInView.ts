import {
  useEffect,
  useRef,
  useState,
  useCallback,
  RefObject,
  useTransition,
} from "react";

interface Props {
  initiallyInView?: boolean;
  getContainerElement?: () => HTMLElement | null;
  once?: boolean;
  threshold?: number;
  margin?: string;
  onInViewChange?: (isInView: boolean) => void;
}

export type InViewProps = Props;

export const useInView = <T extends Element | null = HTMLElement>({
  getContainerElement,
  once = false,
  threshold = 0,
  margin = "0px",
  onInViewChange,
  initiallyInView = false,
}: Props): [targetRef: RefObject<T | null>, isInView: boolean] => {
  const [isInView, setIsInView] = useState(initiallyInView);
  const targetRef = useRef<T | null>(null);
  const [, setTransition] = useTransition();
  const onChangeRef = useRef(onInViewChange);
  onChangeRef.current = onInViewChange;
  const getContainerRef = useRef(getContainerElement);
  getContainerRef.current = getContainerElement;

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const { isIntersecting } = entries[0];
      setIsInView((isInView) => {
        if (isIntersecting === isInView) return isIntersecting;
        if (once && isIntersecting) {
          observer.disconnect();
        }
        return isIntersecting;
      });
      setTransition(() => {
        onChangeRef.current?.(isIntersecting);
      });
    },
    [once]
  );

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: getContainerRef.current?.(),
      rootMargin: margin,
      threshold,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer?.disconnect();
  }, [margin, threshold, handleObserver]);

  return [targetRef, isInView];
};
