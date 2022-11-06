import { createContext, useContext, useMemo, useState } from "react";

const CreateAnswerValueContext = createContext();
const CreateAnswerActionsContext = createContext();

function CreateAnswerProvider({ children }) {
  const [essayAnswers, setEssayAnswers] = useState([]);
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState([]);
  const [oxAnswers, setOXAnswers] = useState([]);
  const [essayAnswerValidate, setEssayAnswerValidate] = useState(0);
  const [multipleChoiceAnswerValidate, setMultipleChoiceAnswerValidate] =
    useState(0);
  const [oxAnswerValidate, setOXAnswerValidate] = useState(0);

  const actions = useMemo(
    () => ({
      addEssayAnswer(item) {
        setEssayAnswers((prev) => [
          ...prev,
          {
            questionId: item.questionId,
            answerContent: "",
          },
        ]);
      },
      setEssayAnswers(answers) {
        setEssayAnswers(answers);
      },
      addMultipleChoiceAnswer(item) {
        setMultipleChoiceAnswers((prev) => [
          ...prev,
          {
            questionId: item.questionId,
            multiQuestionId: -1,
          },
        ]);
      },
      setMultipleChoiceAnswers(answers) {
        setMultipleChoiceAnswers(answers);
      },
      addOXAnswer(item) {
        setOXAnswers((prev) => [
          ...prev,
          {
            questionId: item.questionId,
            isYes: null,
          },
        ]);
      },
      setOXAnswers(answers) {
        setOXAnswers(answers);
      },
      setEssayAnswerValidate(count) {
        setEssayAnswerValidate(count);
      },
      setMultipleChoiceAnswerValidate(count) {
        setMultipleChoiceAnswerValidate(count);
      },
      setOXAnswerValidate(count) {
        setOXAnswerValidate(count);
      },
    }),
    []
  );

  return (
    <CreateAnswerActionsContext.Provider value={actions}>
      <CreateAnswerValueContext.Provider
        value={{
          essayAnswers: essayAnswers,
          multipleChoiceAnswers: multipleChoiceAnswers,
          oxAnswers: oxAnswers,
          essayAnswerValidate: essayAnswerValidate,
          multipleChoiceAnswerValidate: multipleChoiceAnswerValidate,
          oxAnswerValidate: oxAnswerValidate,
        }}
      >
        {children}
      </CreateAnswerValueContext.Provider>
    </CreateAnswerActionsContext.Provider>
  );
}

function useCreateAnswerValue() {
  const value = useContext(CreateAnswerValueContext);
  if (value === undefined) {
    throw new Error(
      "CreateAnswerValueContext should be used within CreateAnswerProvider"
    );
  }
  return value;
}

function useCreateAnswerActions() {
  const value = useContext(CreateAnswerActionsContext);
  if (value === undefined) {
    throw new Error(
      "CreateAnswerActionsContext should be used within CreateAnswerProvider"
    );
  }
  return value;
}

export { CreateAnswerProvider, useCreateAnswerValue, useCreateAnswerActions };
