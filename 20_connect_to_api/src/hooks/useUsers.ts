import { useEffect, useState } from "react";
import CanceledError from "../services/global-http-service";
import userService, { User } from "../services/user-services";

const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
  
    useEffect(() => {
      setIsLoading(true);
  
      const { request, cancel } = userService.getAll<User>();
  
      request
        .then((response) => {
          console.log(response);
  
          if (!response) return;
  
          if (response.data) {
            setUsers(response.data as User[]);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          console.error("Error fetching users:", error);
          setError(error.message);
          setIsLoading(false);
        });
  
      return () => cancel();
    }, []);

    return { users, error, isLoading };
}

export default useUsers;