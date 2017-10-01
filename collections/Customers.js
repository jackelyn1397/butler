Customers = new Mongo.Collection('customers');

/*
Customers.allow({
	insert: function(keyword, frequency) {
		return true;
		//return !!userId;
	},
	update: function(keyword, frequency) {
		return !!userId;
	},

});
*/

CustomerSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title"
	},
    firstName: {
		type: String,
		label: "First Name"
	},
	lastName: {
		type: String,
		label: "Last Name"
	},
    loyaltyNumber: {
        type: Number,
        label: "Loyalty Number"
    },
    entreeCategories: {
        type: [String],
        label: "Entree Categories",
        optional: true
    },
    drinkCategories: {
        type: [String],
        label: "Entree Categories",
        optional: true
    },
    spendingLimitEntree: {
        type: Number,
        label: "Spending limit for entree",
        optional: true
    },
    spendingLimitDrink: {
        type: Number,
        label: "Spending limit for drink",
        optional: true
    }
});

Meteor.methods({
	newCustomer: function(title, firstName, lastName, loyaltyNumber){
        if(!Keywords.findOne({loyaltyNumber: loyaltyNumber})){
			Keywords.insert({title: title,
                            firstName: firstName,
                            lastName: lastName,
                            loyaltyNumber: loyaltyNumber});
		}
	},
	editExistingCustomer: function(loyaltyNumber, entreeCategory, drinkCategory, entreePrice, drinkPrice){
		var customer = Keywords.findOne({loyaltyNumber: loyaltyNumber});
        var entrees = customer.entrees;
        var spendingLimitEntree = customer.spendingLimitEntree;
        if (entree!=null) {
           entrees.push(entree);
           spendingLimitEntree.push(entreePrice);
        }
        var drinks = customer.drinks;
        var spendingLimitDrink = customer.spendingLimitDrink;
        if (drink!=null) {
           drinks.push(drink);
           spendingLimitDrink.push(drinkPrice);
        }
		Customers.update({
			loyaltyNumber: loyaltyNumber
		}, {
			$set: {
				entrees: entrees,
                drinks: drinks,
                spendingLimitEntree: spendingLimitEntree,
                spendingLimitDrink: spendingLimitDrink
			}
		});
	},
});

Customers.attachSchema(CustomerSchema);