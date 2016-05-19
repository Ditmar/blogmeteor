
ID=new ReactiveVar("-1");

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
Router.route("/articulo/:_id",function(){
 	var params = this.params;
  	ID.set(params._id);	

  	Meteor.subscribe("users");
 	Meteor.subscribe("itemposts",ID.get());
 	Meteor.subscribe("coments",ID.get());
  	this.render("itemarticulos"); 	
});