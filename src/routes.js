const routes = {
  mypage: "/mypage",
  main: "/",
  signup: "/signup",
  signin: "/signin",
  resetPassword: "/reset-password",
  emailConfirm: "/email-confirm",
  createSurvey: "/create-survey",
  surveyStats: "/survey-stats",
  participateSurvey: "/survey/:sharingKey",
  manageSurvey: "/survey/:userId/manage",
  createdSurvey: "/my/survey/:sharingKey",
  inquireSubmittedSurvey: "/my/survey/submitted/:sharingKey",
  createCardSurvey: "/create-card-survey",
  editSurvey: "/survey/edit",
  withdrawl: "/withdrawal",
  privacyPolicy: "/privacyPolicy",
  termsOfService: "/termsOfService",
  agreeSignPolicy: "/signup/agree",
};

export default routes;
