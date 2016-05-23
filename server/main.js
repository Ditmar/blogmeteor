Meteor.startup(function(){



	//check
	// "scigG9D6a3oTbmEot"
	Meteor.methods({
		"addAdminRoles":function(id)
		{
			//Roles.addUsersToRoles(id,["editPublish","deletePublish","deleteComents"]);
		},
		"coments.update" : function (id,c) {
			//agregar codigo seguro
			//------------------//
			POSTS.update({_id:id},{$set : {coments:c}});
		},
		"item.update" : function(id,updated) {
			console.log(id)
			console.log(updated);
			//POSTS.update({_id:id}, {$set:updated});
			
			POSTS.update({_id:id}, {$set:{title:updated.title,text:updated.text}});
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
