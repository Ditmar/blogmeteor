POSTS = new Mongo.Collection("news");
COMENTS = new Mongo.Collection("coments");
POSTS.allow({
	"insert":function(){
		
		return true;
	}

});
COMENTS.allow({
	"insert":function(){
		return true;
	}
});

if(Meteor.isClient) {
	var Schemas={}
	Schemas.Coments = new SimpleSchema({
		text : {
			type : String,
			label : "Comentarios"
		},
		current_date : {
			type : Date,
			label : "Fecha de Publicación",
			autoValue : function()
			{
				return new Date();
			}
		},
		autor : {
			type : String,
			label : "Autor",
			autoValue : function()
			{
				return Accounts.userId();
			}
		},
		articuloId : {
			type : String,
			label : "ID del Articulo"
		}
	});
	POSTS.attachSchema(Schemas.Coments);
	Schemas.Posts=new SimpleSchema({
		images:
		{
			type:String,
			label:"Images"
		},
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
			label:"Cantidad de Comentarios"
			/*autoValue:function(){
				return 0;
			}*/
		}
	});
	POSTS.attachSchema(Schemas.Posts);
	POSTS.helpers({
		autors(){
			var aux=Meteor.users.findOne({_id:this.autor});
			if(aux!=undefined)
			{

				if(aux.username!=undefined)
				{
					return 	aux.username
				}else{
					return aux.profile.name;
				}
			}else{
				return "FALLO!";

			}
			
		}
	});	
}
