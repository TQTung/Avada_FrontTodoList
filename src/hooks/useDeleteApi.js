import { useState } from "react";
import { methods } from "../constants/method";
import requestApi from "../helpers/httpClient";

const useDeleteApi = () => {
  const [deleting, setDeleting] = useState(false);

  const deleteTask = async (endpoint, id) => {
    try {
      setDeleting(true);
      return await requestApi({ endpoint, method: methods.DELETE, query: id });
    } catch (err) {
      alert("An error occurred while deleting the new task!");
      console.log(err);
    } finally {
      setDeleting(false);
    }
  };

  return { deleting, deleteTask };
};

export default useDeleteApi;
