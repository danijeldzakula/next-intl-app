import { useCallback, useEffect, useState } from 'react';

type TProps = {
  width: number | null;
  height: number | null;
};

const HAS_WINDOW: boolean = typeof window !== 'undefined';

export default function useWindowDimensions(): TProps {
  const getWindowDimensions = (): TProps => {
    const width = HAS_WINDOW ? window.innerWidth : null;
    const height = HAS_WINDOW ? window.innerHeight : null;

    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState<TProps>(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    HAS_WINDOW && window.addEventListener('resize', handleResize);

    return () => {
      HAS_WINDOW && window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowDimensions;
}
