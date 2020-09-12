import {useRef, useEffect, useCallback} from 'react';

export function useEffectCallback(fn: Function, dependencies: Array<any>) {
  const ref = useRef<Function | null>(null);

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies])

  return useCallback((...args) => {
    // Run the latest callback function by ref.current
    ref.current && ref.current.apply(null, args); 
  }, [ref])
}