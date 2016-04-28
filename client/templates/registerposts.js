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
	$("#fecha").datepicker();
});



/*
*/


<?php 








