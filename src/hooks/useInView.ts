import { useEffect, useRef, useState } from "react";

interface Props {
  initialInView?: boolean;
  getContainerElement?: () => HTMLElement | null;
  once?: boolean;
  threshold?: number;
  margin?: string;
  onChange?: (intersecting: boolean) => void;
}

export type InViewProps = Props;

export const useInView = <T extends Element | null = HTMLElement>({
  once = false,
  threshold = 0,
  margin = "0px",
  getContainerElement,
  onChange,
  initialInView = false,
}: Props) => {
  const [inView, setInView] = useState(initialInView);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<T | null>(null);
  const inViewRef = useRef(inView);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;
  const getContainerRef = useRef(getContainerElement);
  getContainerRef.current = getContainerElement;

  const shouldRunOnce = once && inView;

  useEffect(() => {
    if (shouldRunOnce) {
      observerRef.current?.disconnect();
    }
  }, [shouldRunOnce]);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observerOptions: IntersectionObserverInit = {
      root: getContainerRef.current?.(),
      rootMargin: margin,
      threshold,
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting } = entries[0];
      if (inViewRef.current === isIntersecting) return;

      inViewRef.current = isIntersecting;
      setInView(isIntersecting);
      onChangeRef.current?.(isIntersecting);
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    observerRef.current = observer;
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold, margin]);

  return [targetRef, inView] as const;
};
