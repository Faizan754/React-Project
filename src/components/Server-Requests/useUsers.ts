import { useEffect, useState } from "react";
import userService, { Users } from "./userService";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const FetchUsers = async () => {
    //   try {
    //     const res = await axios.get<Users[]>(
    //       "https://jsonplaceholder.typicode.com/xusers"
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };

    setLoading(true);
    const { request, cancel } = userService.getAll<Users>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
