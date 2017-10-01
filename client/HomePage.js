Template.HomePage.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
});

Template.HomePage.events({
  'click .addCustomer' : function () {
    FlowRouter.go("/addCustomer");
  },
  'click .editCustomer' : function () {
    FlowRouter.go("/editCustomer");
  },
  'click .searchCustomer' : function () {
    FlowRouter.go("/searchCustomer");
  },
  'click .editMenu' : function () {
    FlowRouter.go("/editMenu");
  }
});

Template.HomePage.helpers({

});