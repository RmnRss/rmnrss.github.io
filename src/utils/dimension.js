import { useEffect, useState } from 'react';

function getWindowWidth() {
  return window.innerWidth;
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(1280);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}
