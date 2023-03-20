import { useState, useEffect, useCallback, useRef } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState([]),
    [error, setError] = useState(null),
    [loading, setLoading] = useState(true),
    isFetching = useRef(false),
    fetchPage = useCallback(async (url, options) => {
      const response = await fetch(url, options);
      if (response.ok) {
        const json = await response.json();
        setData((d) => d.concat(json));
        const linkHaader = response.headers.get("link"),
          [page1, page2] = linkHaader?.split(","),
          [page1Url, rel1] = page1.split(";"),
          [page2Url, rel2] = page2.split(";");
        if (response.status === 200) {
          if (rel1.includes("next")) {
            const url = page1Url.match(/[^<].*[^>]/);
            await fetchPage(url, options);
          } else if (rel2.includes("next")) {
            const url = page2Url.match(/[^ <].*[^>]/);
            await fetchPage(url, options);
          }
        }
      }
    }, []);

  useEffect(() => {
    (async () => {
      if (isFetching.current === false) {
        isFetching.current = true;
        try {
          await fetchPage(url, options);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      }
      isFetching.current = false;
    })();
    return () => {
      setData([]);
    };
  }, [fetchPage, options, url]);

  return { data, error, loading };
}
