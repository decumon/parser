import { useEffect, useRef } from 'react';

export function useFullExportWorker(onMessage) {
  const workerRef = useRef(null);

  useEffect(() => {
    const worker = new Worker(new URL('../workers/fullExportWorker.js', import.meta.url));
    workerRef.current = worker;

    worker.onmessage = onMessage;

    return () => {
      worker.terminate();
    };
  }, [onMessage]);

  const startExport = () => {
    workerRef.current.postMessage({ isWorkFE: true });
  };

  const stopExport = () => {
    workerRef.current.postMessage({ isWorkFE: false });
  };

  return { startExport, stopExport };
}