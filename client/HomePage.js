Template.HomePage.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
	$('body').css('background-image','url(https://user-images.githubusercontent.com/10893413/31052370-90e80aa6-a650-11e7-9f6f-ee667b78b897.png)');
});

Template.HomePage.events({
  'click #butt' : function () {
    FlowRouter.go("/chooseSection");
  }
});

Template.HomePage.helpers({

});