import { createContext, useMemo, useState } from "react";

const SortContext = createContext();
const SortActionsContext = createContext();

function SortContextProvider({ children }) {
  const [sort, setSort] = useState("new");

  const actions = useMemo(
    () => ({
      setPreferenceSort(data) {
        setSort(data);
      },
    }),
    []
  );

  return (
    <SortActionsContext.Provider value={actions}>
      <SortContext.Provider value={sort}>{children}</SortContext.Provider>
    </SortActionsContext.Provider>
  );
}

export { SortContext, SortActionsContext, SortContextProvider };
