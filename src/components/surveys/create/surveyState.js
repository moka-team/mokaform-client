import { createContext, useContext, useMemo, useState } from "react";
import dayjs from "dayjs";

const CreateSurveyValueContext = createContext();
const CreateSurveyActionsContext = createContext();

function CreateSurveyProvider({ children }) {
  const [survey, setSurvey] = useState({
    title: "",
    summary: "",
    isAnonymous: false,
    isPublic: false,
    startDate: dayjs().format("YYYY-MM-DD"),
    endDate: dayjs(""),
    categories: [],
    questions: [],
    multiQuestions: [],
    image: "",
  });
  const actions = useMemo(
    () => ({
      setTitle(message) {
        setSurvey((prev) => ({
          ...prev,
          title: message,
        }));
      },
      setSummary(message) {
        setSurvey((prev) => ({
          ...prev,
          summary: message,
        }));
      },
      setIsAnonymous(checked) {
        setSurvey((prev) => ({
          ...prev,
          isAnonymous: checked,
        }));
      },
      setIsPublic(checked) {
        setSurvey((prev) => ({
          ...prev,
          isPublic: checked,
        }));
      },
      setStartDate(date) {
        setSurvey((prev) => ({
          ...prev,
          startDate: date,
        }));
      },
      setEndDate(date) {
        setSurvey((prev) => ({
          ...prev,
          endDate: date,
        }));
      },
      setCategories(categories) {
        setSurvey((prev) => ({
          ...prev,
          categories: categories,
        }));
      },
      setQuestions(questions) {
        setSurvey((prev) => ({
          ...prev,
          questions: questions,
        }));
      },
      setMultiQuestions(multiQuestions) {
        setSurvey((prev) => ({
          ...prev,
          multiQuestions: multiQuestions,
        }));
      },
      setSurveyImage(image) {
        setSurvey((prev) => ({
          ...prev,
          image: image,
        }));
      },
    }),
    []
  );

  return (
    <CreateSurveyActionsContext.Provider value={actions}>
      <CreateSurveyValueContext.Provider value={survey}>
        {children}
      </CreateSurveyValueContext.Provider>
    </CreateSurveyActionsContext.Provider>
  );
}

function useCreateSurveyValue() {
  const value = useContext(CreateSurveyValueContext);
  if (value === undefined) {
    throw new Error(
      "CreateSurveyValueContext should be used within CreateSurveyProvider"
    );
  }
  return value;
}

function useCreateSurveyActions() {
  const value = useContext(CreateSurveyActionsContext);
  if (value === undefined) {
    throw new Error(
      "CreateSurveyValueActions should be used within CreateSurveyProvider"
    );
  }
  return value;
}

export { CreateSurveyProvider, useCreateSurveyValue, useCreateSurveyActions };
