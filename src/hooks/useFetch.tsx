import { useCallback, useEffect, useState } from "react";

export default function useFetch(apiUrl: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState("");

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setFetchedData(data.quote);
    } catch (e) {
      setFetchedData("");
      console.error(`Error fetching data: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    isLoading,
    fetchedData,
  };
}
