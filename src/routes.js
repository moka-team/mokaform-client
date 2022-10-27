const routes = {
  mypage: "/mypage/:userId",
  main: "/",
  signup: "/signup",
  signin: "/signin",
  resetPassword: "/reset-password",
  createSurvey: "/create-survey",
  surveyStats: "/survey/:userId/manage/survey-stats/:surveyId",
  participateSurvey: "/survey/:sharingKey",
  manageSurvey: "/survey/:userId/manage",
  createdSurvey: "/my/survey/:sharingKey",
  inquireSubmittedSurvey: "/my/survey/submitted/:sharingKey",
};

export default routes;
