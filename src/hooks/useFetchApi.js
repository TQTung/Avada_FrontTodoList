import { useEffect, useState } from "react";
import { methods } from "../constants/method";
import requestApi from "../helpers/httpClient";

const useFetchApi = (endpoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [errors, setErrors] = useState(null);
  const [fetched, setFetched] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const resp = await requestApi({
        endpoint,
        method: methods.GET,
      });
      setFetched(true);
      setTaskList(resp.data.data);
    } catch (error) {
      setErrors(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    taskList,
    errors,
    fetched,
    setIsLoading,
    setFetched,
    setErrors,
    setTaskList,
  };
};

export default useFetchApi;
