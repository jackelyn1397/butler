Template.AddCustomer.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
});

Template.AddCustomer.events({
	'click #butts' : function () {
    FlowRouter.go("/searchCustomer");
  }
});

Template.AddCustomer.helpers({

});