Meteor.startup(function(){
	//check
	Meteor.methods({
		"coments.update" : function (id,c) {
			//agregar codigo seguro
			//------------------//
			POSTS.update({_id:id},{$set : {coments:c}});
		}
	});
	
	Meteor.publish("posts",function(){
		//select * from POSTS order by id desc limit 10 
 		return POSTS.find({},{sort:{current_date:-1}});
	});
	Meteor.publish("itemposts",function(id){
		//select * from POSTS order by id desc limit 10 
 		return POSTS.find({_id:id});
	});
	Meteor.publish("users",function(){
		return Meteor.users.find();
	})

	Meteor.publish("coments",function(id){
		return COMENTS.find({articuloId:id});
	});

	UploadServer.init({
    	tmpDir: process.env.PWD + '/.tmp',
    	uploadDir: process.env.PWD + '/.uploads/',
    	checkCreateDirectories: true,
    	finished: function(fileInfo, formFields) {
      		
    	},
  	});
});
