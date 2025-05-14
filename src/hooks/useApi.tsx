import { useEffect, useState } from "react";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export default function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData: ApiResponse<T> = await response.json();
        setData(responseData.data);
      } catch (error) {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}
