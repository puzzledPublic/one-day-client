import React, { useReducer, useState } from "react";
import { AxiosPromise } from "axios";

function useRequest<R = any>(callback: (...params: any[]) => AxiosPromise<R>) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onRequest = async (...params: any[]) => {
    try {
      setLoading(true);
      const response = await callback(...params);
      setData(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
    setLoading(false);
  };

  return [onRequest, loading, data, error] as [
    typeof onRequest,
    typeof loading,
    typeof data,
    typeof error
  ];
}

export default useRequest;
