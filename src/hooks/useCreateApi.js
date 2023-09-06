import { useState } from "react";
import { methods } from "../constants/method";
import requestApi from "../helpers/httpClient";

const useCreateApi = () => {
  const [creating, setCreating] = useState(false);

  const createTask = async (endpoint, data) => {
    try {
      setCreating(true);
      return await requestApi({ endpoint, body: data, method: methods.POST });
    } catch (err) {
      alert("An error occurred while creating the new task!");
      console.log(err);
    } finally {
      setCreating(false);
    }
  };

  return { creating, createTask };
};

export default useCreateApi;
