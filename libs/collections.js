POSTS=new Mongo.Collection("news");
var Schemas={}
Schemas.Posts=new SimpleSchema({
	title:{
		type:String,
		label:"Titulo"
	},
	current_date:{
		type:Date,
		label:"Fecha",
		autoValue:function(){

			return new Date();
		}
	},
	autor:{
		type:String,
		label:"autor",
		autoValue:function()
		{
			return Accounts.userId();
		}
	},
	text:{
		type:String,
		label:"Cuerpo"
	},
	coments:{
		type:Number,
		label:"Cantidad de Comentarios",
		autoValue:function(){
			return 0;
		}
	}
});
POSTS.attachSchema(Schemas.Posts);
POSTS.helpers({
	autors(){
		var aux=Meteor.users.findOne({_id:this.autor});
		if(aux!=undefined)
		{
			return aux.emails[0].address;	
		}else{
			return "->"
		}
		
	}
});





