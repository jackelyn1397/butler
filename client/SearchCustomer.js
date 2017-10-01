Template.SearchCustomer.onCreated(function() {
	var self = this;
    self.autorun(function() {
		self.subscribe('customers');
        self.subscribe('menuitems')
	});
    $("#results").hide();
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
        if (document.getElementById('name').value=="Jenny Wang") {
            $("#customerName").html("Jenny Wang");
            $("#entreeCategory").html("seafood");
            $("#drinkCategory").html("wine");
            $("#entreePrice").html("200");
            $("#drinkPrice").html("100");
            $("#entreeRec").html("Salmon");
            $("#drinkRec").html("Merlot");
        }
        else if (document.getElementById('name').value=="Elaine Liu") {
            $("#customerName").html("Elaine Liu");
            $("#entreeCategory").html("salad");             
            $("#drinkCategory").html("beer");
            $("#entreePrice").html("100");
            $("#drinkPrice").html("30");
            $("#entreeRec").html("Caesar Salad");
            $("#drinkRec").html("Corona");
        }
        else{
            $("#customerName").html("soup");
            $("#customerName").html(document.getElementById('name').value);
            $("#entreeCategory").html("soup");
            $("#drinkCategory").html("champagne");
            $("#entreePrice").html("150");
            $("#drinkPrice").html("70");
            $("#entreeRec").html("Minestrone Soup");
            $("#drinkRec").html("Dom Perignon");
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