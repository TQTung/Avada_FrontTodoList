import { useState } from "react";
import { methods } from "../constants/method";
import requestApi from "../helpers/httpClient";

const useUpdateApi = () => {
  const [updating, setUpdating] = useState(false);

  const updateTask = async (endpoint, id) => {
    try {
      setUpdating(true);
      return await requestApi({ endpoint, method: methods.PUT, query: id });
    } catch (err) {
      alert("An error occurred while updating the new task!");
      console.log(err);
    } finally {
      setUpdating(false);
    }
  };

  return { updating, updateTask };
};

export default useUpdateApi;
