import { useEffect, useRef } from 'react';

export function useFullExportWorker(onMessage) {
  const workerRef = useRef(null);
  const onMessageRef = useRef(onMessage);

  // Держим актуальный обработчик без пересоздания воркера
  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  // Создаем воркер один раз
  useEffect(() => {
    const worker = new Worker(new URL('../workers/fullExportWorker.js', import.meta.url));
    workerRef.current = worker;
    worker.onmessage = (event) => onMessageRef.current && onMessageRef.current(event);

    return () => {
      worker.terminate();
    };
  }, []);

  const startExport = () => {
    workerRef.current.postMessage({ isWorkFE: true });
  };

  const stopExport = () => {
    workerRef.current.postMessage({ isWorkFE: false });
  };

  return { startExport, stopExport };
}