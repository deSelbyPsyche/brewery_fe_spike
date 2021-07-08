import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch, Selector } from "react-redux";

import { AppState, AppAction } from "./rootReducer";
import { AppDispatch } from "../configureStore";

type Status = "NOT_ASKED" | "LOADING" | "FAIL" | "SUCCESS";

export const useApiFetch = <
  RequestFn extends (...args: any) => Promise<OutputData>,
  OutputData
>({
  requestFn,
  cacheActionCreator,
  cacheSelector
}: {
  requestFn: RequestFn;
  cacheActionCreator: (data: OutputData) => AppAction;
  cacheSelector: Selector<AppState, OutputData | undefined>;
}) => {
  const cachedData = useSelector(cacheSelector);
  const [data, setData] = useState<OutputData | undefined>(cachedData);
  const [status, setStatus] = useState<Status>("NOT_ASKED");
  const [error, setError] = useState<string | undefined>();

  const dispatch: AppDispatch = useDispatch();

  const dataString = JSON.stringify(cachedData);
  useEffect(() => {
    setData(cachedData);
  }, [dataString]);

  const submit = useCallback(async (...params: Parameters<RequestFn>) => {
    setStatus("LOADING");
    try {
      const freshData = await requestFn(...params);

      dispatch(cacheActionCreator(freshData));

      setData(freshData);
      setStatus("SUCCESS");
    } catch (error) {
      setStatus("FAIL");
      setError(error.message);
    }
  }, []);

  return {
    data,
    submit,
    status,
    error
  };
};

export const useApiMutate = <
  RequestFn extends (...args: any) => Promise<any>,
  ResponseData
>({
  requestFn,
  cacheActionCreator
}: {
  requestFn: RequestFn;
  cacheActionCreator: (data: ResponseData) => AppAction;
}) => {
  const [data, setData] = useState<ResponseData | undefined>();
  const [status, setStatus] = useState<Status>("NOT_ASKED");
  const [error, setError] = useState<string | undefined>();

  const dispatch: AppDispatch = useDispatch();

  const submit = useCallback(async (...params: Parameters<RequestFn>) => {
    setStatus("LOADING");
    try {
      const freshData = await requestFn(...params);

      dispatch(cacheActionCreator(freshData));

      setData(freshData);
      setStatus("SUCCESS");
    } catch (error) {
      setStatus("FAIL");
      setError(error.message);
    }
  }, []);

  return {
    submit,
    status,
    error,
    data
  };
};
