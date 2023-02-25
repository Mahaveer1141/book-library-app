import { useState, useEffect } from "react";

type ResponseType = {
  data: any;
  isLoading: boolean;
  error: Error | null;
};

type Options = {
  dependacyArray: any[];
};

export function useFetch(
  URL: string,
  body?: any,
  options?: Options
): ResponseType {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    setIsLoading(true);
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
    setIsLoading(true);
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
  }, [...(options?.dependacyArray || [])]);

  return { data, isLoading, error };
}
