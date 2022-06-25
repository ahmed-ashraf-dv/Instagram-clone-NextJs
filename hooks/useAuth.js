import { useRouter } from "next/router";
import useCookie from "./useCookie";
import axios from "axios";

const useAuth = () => {
  const cookie = useCookie();
  const router = useRouter();

  const signUp = async ({ dataSign, onError }) => {
    try {
      const { data } = await axios("/api/sign", {
        method: "POST",
        data: dataSign,
      });

      if (data.code === 200) {
        return router.push("/login");
      }

      onError(data.message);
    } catch (err) {
      onError(err.message);
    }
  };

  const login = async ({ dataSign, onError }) => {
    try {
      const { data } = await axios("/api/login", {
        method: "POST",
        data: dataSign,
      });

      if (data.code === 200) {
        cookie.set({ name: "token", value: data.token, exDays: "7" });
        return router.push("/");
      }

      onError(data.message);
    } catch (err) {
      onError(err.message);
    }
  };

  const logout = async () => {
    cookie.del("token");

    router.push("/login");
  };

  return { signUp, login, logout };
};

export default useAuth;
