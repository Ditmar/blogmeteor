Router.configure({
	layoutTemplate:"layout"
});
Router.route("/",function(){
	Meteor.subscribe("posts");
	Meteor.subscribe("users");
 	this.render("posts");
});
Router.route("/newpost",function(){
 	this.render("registerposts");
});