import { createContext, useMemo, useState } from "react";

const UserContext = createContext();
const UserActionsContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    userId: 0,
    email: null,
    nickname: null,
    ageGroup: null,
    gender: null,
    job: null,
    categories: [],
    loggedIn: false,
  });
  const actions = useMemo(
    () => ({
      setLoggedUser(data) {
        if (data !== null) {
          setUser({
            ...data,
            loggedIn: true,
          });
        } else {
          setUser({ ...data, loggedIn: false });
        }
      },
    }),
    []
  );

  return (
    <UserActionsContext.Provider value={actions}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </UserActionsContext.Provider>
  );
}

export { UserContext, UserActionsContext, UserContextProvider };
