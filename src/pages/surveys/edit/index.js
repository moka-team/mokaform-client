import EditPage from "../../../components/surveys/edit/EditPage";
import { EditSurveyProvider } from "../../../components/surveys/edit/surveyState";

export default function EditSurvey() {
  return (
    <EditSurveyProvider>
      <EditPage></EditPage>
    </EditSurveyProvider>
  );
}
