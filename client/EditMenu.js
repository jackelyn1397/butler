Template.EditMenu.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
});

Template.EditMenu.events({
    'click .back' : function () {
        FlowRouter.go("/");
      },
      'click .submit-add' : function () {
        var name = document.getElementById('name').value;
        var category = document.getElementById('category').value;
        var price = document.getElementById('price').value;
        if (name!="" && category!="" && price!="") {
            Meteor.call("newMenuItem", name, category, price, false);
        }
      },
        'click .submit-edit' : function () {
        var allItems = MenuItems.find({}).fetch();
        for (var i=0; i<allItems.length; i++) {
            var name = allItems[i].name;
            if($('#' + name).is(":checked")){
                Meteor.call("newMenuItem", name, true);
            }
            else{
                Meteor.call("newMenuItem", name, false);
            }
        }
        console.log(MenuItems.find({}).fetch());
      }
});

Template.EditMenu.helpers({
    listItems: function(){
        return MenuItems.find({}).fetch();
    }

});