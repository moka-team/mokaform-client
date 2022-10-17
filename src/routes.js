const routes = {
  mypage: "/mypage/:userId",
  main: "/",
  signup: "/signup",
  signin: "/signin",
  resetPassword: "/reset-password",
  createSurvey: "/create-survey",
  surveyStats: "/survey-stats",
  participateSurvey: "/survey/:sharingKey",
  manageSurvey: "/survey/:userId/manage",
  createdSurvey: "/my/survey/:sharingKey",
};

export default routes;
