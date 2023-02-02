import { useCallback, useContext, useState } from "react";
import Context from "contexts/UserContext";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {
  const { favs, jwt, setFavs, setJWT, user, setUser } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJWT(jwt);
          setUser(username);
          window.sessionStorage.setItem("user", username);
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("user");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJWT, setUser]
  );

  const addFav = useCallback(
    ({ id }) => {
      addFavService({ id, jwt })
        .then(setFavs)
        .catch((err) => {
          console.error(err);
        });
    },
    [jwt, setFavs]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    window.sessionStorage.removeItem("user");
    setJWT(null);
  }, [setJWT]);

  return {
    user,
    addFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
