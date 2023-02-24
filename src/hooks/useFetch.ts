import { useState, useEffect } from "react";

interface ResponseType {
  data: any;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch(URL: string, body?: any): ResponseType {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const data = await (await fetch(URL)).json();
      setData(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  async function postData() {
    try {
      const data = await (
        await fetch(URL, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();
      setData(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (body) postData();
    else getData();
  }, []);

  return { data, isLoading, error };
}
