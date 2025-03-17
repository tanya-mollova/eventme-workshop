import { useEffect, useState, useTransition } from "react";

export default function useFetch(url, defaultState = {}) {
  const [state, setState] = useState(defaultState);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const abortController = new AbortController();
      fetch(url, { signal: abortController.signal })
        .then((res) => res.json())
        .then((result) => {
          setState(Object.values(result));
        });
      return () => {
        abortController.abort();
      };
    });
  }, [url]);

  return [pending, state];
}
