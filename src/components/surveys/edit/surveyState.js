import dayjs from "dayjs";
import { useContext, useMemo, useState } from "react";
import { createContext } from "react";

const EditSurveyValueContext = createContext();
const EditSurveyActionsContext = createContext();

function EditSurveyProvider({ children }) {
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
      setCurrentSurvey(message) {
        setSurvey(message);
      },
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
    <EditSurveyActionsContext.Provider value={actions}>
      <EditSurveyValueContext.Provider value={survey}>
        {children}
      </EditSurveyValueContext.Provider>
    </EditSurveyActionsContext.Provider>
  );
}

function useEditSurveyValue() {
  const value = useContext(EditSurveyValueContext);
  return value;
}

function useEditSurveyActions() {
  const value = useContext(EditSurveyActionsContext);
  return value;
}

export { EditSurveyProvider, useEditSurveyActions, useEditSurveyValue };
