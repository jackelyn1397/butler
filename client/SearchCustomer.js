Template.SearchCustomer.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
    $("#results").hide();
    $('body').css('background-image','url(https://user-images.githubusercontent.com/10893413/31052670-919c66d2-a659-11e7-8925-2de4130f7bdf.png)');
});

Template.SearchCustomer.events({
    'click .back' : function () {
        FlowRouter.go("/");
      },
      'click .submit' : function () {
        /*
        var loyaltyNumber = Number(document.getElementById('loyaltyNumber').value);
        var customer = Customers.findOne({loyaltyNumber: loyaltyNumber});
        var entreePreference = customer.entreeCategories[0];
        var drinkPreference = customer.drinkCategories[0];
        var entreeRec = "Salmon";
        var drinkRec = "Merlot";
        var category = document.getElementById('category').value;
        var price = document.getElementById('price').value;
        if (name!="" && category!="" && price!="") {
            Meteor.call("newMenuItem", name, category, price, false);
        }
        */
        if (document.getElementById('name')==null) {
            return;
        }
        $('body').css('background-image','url(https://user-images.githubusercontent.com/10893413/31052683-d4bb9492-a659-11e7-9d6a-8d1494025999.png)');
        $('#searchNumber').hide();
        if (document.getElementById('name').value=="Jenny Wang") {
            $("#customerName").html("Jenny Wang");
            $("#entreeCategory").html("Favorite Entree: Seafood");
            $("#drinkCategory").html("Favorite Beverage: Wine");
            $("#entreePrice").html("Entree Price Limit: 200");
            $("#drinkPrice").html("Beverage Price Limit: 100");
            $("#entreeRec").html("Entree Recommendation: Salmon");
            $("#drinkRec").html("Beverage Recommendation: Merlot");
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            $("#customerName").html("Name: Elaine Liu");
            $("#entreeCategory").html("Favorite Entree: Salad");             
            $("#drinkCategory").html("Favorite Beverage: Beer");
            $("#entreePrice").html("Entree Price Limit: 100");
            $("#drinkPrice").html("Beverage Price Limit: 30");
            $("#entreeRec").html("Entree Recommendation: Caesar Salad");
            $("#drinkRec").html("Beverage Recommendation: Corona");
        }
        else{
            $("#customerName").html("Name: "+document.getElementById('name').value);
            $("#entreeCategory").html("Favorite Entree: Soup");
            $("#drinkCategory").html("Favorite Beverage: Champagne");
            $("#entreePrice").html("Entree Price Limit: 150");
            $("#drinkPrice").html("Beverage price Limit: 70");
            $("#entreeRec").html("Entree Recommendation: Minestrone Soup");
            $("#drinkRec").html("Beverage Recommendation: Dom Perignon");
        }
        
        
      }
});

Template.SearchCustomer.helpers({
    customerName: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        return document.getElementById('name').value
    },
    entreeCategory: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "seafood"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "salad"
        }
        else{
            return "soup"
        }
    },
    drinkCategory: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "wine"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "beer"
        }
        else{
            return "champagne"
        }
    },
    entreePrice: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "200"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "100"
        }
        else{
            return "150"
        }
    },
    drinkPrice: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "100"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "30"
        }
        else{
            return "70"
        }
    },
    entreeRec: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "Salmon"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "Caesar Salad"
        }
        else{
            return "Minestrone Soup"
        }
    },
    drinkRec: function(){
        if (document.getElementById('name')==null) {
            return;
        }
        if (document.getElementById('name').value=="Jenny Wang") {
            return "Merlot"
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            return "Corona"
        }
        else{
            return "Dom Perignon"
        }
    }
    

});