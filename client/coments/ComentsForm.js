Template.ComentsForms.helpers({
	listComents : COMENTS.find()
});

Template.ComentsForms.events({
	"click button" : function(e)
	{
		e.preventDefault();
		var datos = $("#formComents").serializeObject();
		COMENTS.insert(datos);
		var c = this.coments;
		c++;
		// Meteor.call Llama a un metodo que se ha defino en meteor a nivel de servidor
		Meteor.call('coments.update',this._id,c,function 
			(error, result) {

			});
		//POSTS.update({_id:this._id},{$set : {coments:c}});
	}
});