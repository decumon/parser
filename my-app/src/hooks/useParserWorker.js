import { useEffect, useRef } from 'react';

export function useParserWorker(onMessage) {
  const workerRef = useRef(null);

  useEffect(() => {
    const worker = new Worker(new URL('../workers/parserWorker.js', import.meta.url));
    workerRef.current = worker;

    worker.onmessage = onMessage;

    return () => {
      worker.terminate();
    };
  }, [onMessage]);

  const startParser = (API_KEY, GLOVES, GLOVES1, GLOVES2, SKINS) => {
    workerRef.current.postMessage({ 
      API_KEY,
      isWork: true,
      GLOVES,
      GLOVES1,
      GLOVES2,
      SKINS
    });
  };

  const stopParser = () => {
    workerRef.current.postMessage({ isWork: false });
  };

  return { startParser, stopParser };
}