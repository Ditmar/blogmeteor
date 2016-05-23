Template.modaledit.helpers({
	title() {
		return IDPUBLISH.get().title
	},
	text() {
		return IDPUBLISH.get().text 
	},
	id() {
		return IDPUBLISH.get()._id
	}
});
Template.modaledit.events({
	"click #editbtn" : function(e) {
		var form = $("#formEdit").serializeObject();
		Meteor.call("item.update",IDPUBLISH.get()._id, form, function() {

		});
		$("#modal_edit_role").modal('hide');
	}
})