import { useState, useEffect, useRef } from 'react';

export function useNearScreen() {
  const element = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== 'undefined'
          ? window.IntersectionObserver
          : import('intersection-observer') //Este polyfill modifica el window actualizandolo con la funcionalidad requerida
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(element.current);
      });
    },
    [element]
  );
  return [show, element]
}
