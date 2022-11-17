import { createContext, useMemo, useState } from "react";

const SurveyListContext = createContext();
const SurveyListActionsContext = createContext();

function SurveyListContextProvider({ children }) {
  const [preferenceSurveyList, setPreferenceSurveyList] = useState([]);

  const actions = useMemo(
    () => ({
      setPreferenceList(data) {
        setPreferenceSurveyList(data);
      },
    }),
    []
  );

  return (
    <SurveyListActionsContext.Provider value={actions}>
      <SurveyListContext.Provider value={preferenceSurveyList}>
        {children}
      </SurveyListContext.Provider>
    </SurveyListActionsContext.Provider>
  );
}

export {
  SurveyListContext,
  SurveyListActionsContext,
  SurveyListContextProvider,
};
