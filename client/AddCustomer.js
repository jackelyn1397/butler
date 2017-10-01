Template.AddCustomer.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
});

Template.AddCustomer.events({
    'click .back' : function () {
        FlowRouter.go("/");
      },
      'click .submit' : function () {
        var title = document.getElementById('title').value;
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var loyaltyNumber = document.getElementById('loyaltyNumber').value;
        if (title!="" && firstName!="" && lastName!="" && loyaltyNumber!="") {
            Meteor.call("newCustomer", title, firstName, lastName, loyaltyNumber);
        }
      }

});

Template.AddCustomer.helpers({

});