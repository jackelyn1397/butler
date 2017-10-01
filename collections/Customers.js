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
        type: [Number],
        label: "Spending limit for entree",
        optional: true
    },
    spendingLimitDrink: {
        type: [Number],
        label: "Spending limit for drink",
        optional: true
    }
});

Meteor.methods({
	newCustomer: function(title, firstName, lastName, loyaltyNumber){
        if(!Customers.findOne({loyaltyNumber: loyaltyNumber})){
			Customers.insert({title: title,
                            firstName: firstName,
                            lastName: lastName,
                            loyaltyNumber: loyaltyNumber});
			console.log(Customers.find({}).fetch());
		}
	},
	editExistingCustomer: function(loyaltyNumber, entreeCategory, drinkCategory, entreePrice, drinkPrice){
		var customer = Customers.findOne({loyaltyNumber: loyaltyNumber});
		console.log(customer);
        var entreeCategories = customer.entreeCategories;
        var spendingLimitEntree = customer.spendingLimitEntree;
        if (entreeCategory!=null) {
			if (entreeCategories==null) {
                entreeCategories = [entreeCategory];
				spendingLimitEntree = [entreePrice];
            }
			else{
				entreeCategories.push(entreeCategory);
				spendingLimitEntree.push(entreePrice);
			}
        }
        var drinkCategories = customer.drinkCategories;
        var spendingLimitDrink = customer.spendingLimitDrink;
        if (drinkCategory!=null) {
           if (drinkCategories==null) {
                drinkCategories = [drinkCategory];
				spendingLimitDrink = [drinkPrice];
            }
			else{
				entreeCategories.push(entreeCategory);
				spendingLimitDrink.push(drinkPrice);
			}
        }
		Customers.update({
			loyaltyNumber: loyaltyNumber
		}, {
			$set: {
				entreeCategories: entreeCategories,
                drinkCategories: drinkCategories,
                spendingLimitEntree: spendingLimitEntree,
                spendingLimitDrink: spendingLimitDrink
			}
		});
		console.log(Customers.find({}).fetch());
	},
});

Customers.attachSchema(CustomerSchema);