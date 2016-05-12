 URL=new ReactiveVar("");


 Uploader.finished = function(index, fileInfo, templateContext) {
 	URL.set(fileInfo.url);
 	//console.log(fileInfo);   
 }
Template.registerposts.helpers({
	correo:function(){

		//Facebook, Twitter, Google +, Linkedin, otros serivioc Auth
		if(Accounts.user().profile.name!=undefined)
		{
			return Accounts.user().profile.name;	
		}else{
			//desde nuestro propio registro
			return Accounts.user().username;
		}
	},
	URL(){
		return URL.get();
	}
});

Template.registerposts.events({
	"click #btnsend":function(e)
	{
		e.preventDefault();
		var r=$("#formregister").serializeObject();
		//var title=e.target.title.value;
		POSTS.insert(r);
		//console.log(r);
	}
});
Template.registerposts.onRendered(function(){

});

Template.itemarticulos.helpers({
	foo(){
		var aux=POSTS.find();
		return aux;
	}
});
