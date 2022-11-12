import { createContext, useMemo, useState } from "react";

const EmailContext = createContext();
const EmailActionsContext = createContext();

function EmailContextProvider({ children }) {
  const [email, setEmail] = useState("");

  const actions = useMemo(
    () => ({
      setValidateEmail(data) {
        setEmail(data);
      },
    }),
    []
  );

  return (
    <EmailActionsContext.Provider value={actions}>
      <EmailContext.Provider value={email}>{children}</EmailContext.Provider>
    </EmailActionsContext.Provider>
  );
}

export { EmailContext, EmailActionsContext, EmailContextProvider };

