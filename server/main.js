Meteor.publish("posts",function(){
	return POSTS.find();
})
Meteor.publish("users",function(){
	return Meteor.users.find({},{fields:{emails:1}});
})
