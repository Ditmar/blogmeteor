Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});
Template.posts.helpers({
	DATOS:POSTS.find()
});

