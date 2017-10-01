Template.EditCustomer.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
});

Template.EditCustomer.events({
    'click .back' : function () {
        FlowRouter.go("/");
      },
      'click .submit' : function () {
        var loyaltyNumber = document.getElementById('loyaltyNumber').value;
        var entree = document.getElementById('entree').value;
        var drink = document.getElementById('drink').value;
        var entreeCategory = null;
        var drinkCategory = null;
        var entreePrice = null;
        var drinkPrice = null;
        if (loyaltyNumber!="") {
            if (entree!="") {
                var matchingEntree = MenuItems.findOne({name: entree});
                entreeCategory = matchingEntree.category;
                entreePrice = Number(matchingEntree.price);
            }
            if (drink!="") {
                var matchingDrink = MenuItems.findOne({name: drink});
                drinkCategory = matchingDrink.category;
                drinkPrice = Number(matchingDrink.price);
            }
            Meteor.call("editExistingCustomer", Number(loyaltyNumber), entreeCategory, drinkCategory, entreePrice, drinkPrice);
            
        }
      }
});

Template.EditCustomer.helpers({
    

});