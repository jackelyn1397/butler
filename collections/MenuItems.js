MenuItems = new Mongo.Collection('menuitems');

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

MenuItemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
    category: {
		type: String,
		label: "Category"
	},
	price: {
		type: Number,
		label: "Price"
	},
    current: {
        type: Boolean,
        label: "Current Menu Item"
    }
});

Meteor.methods({
	newMenuItem: function(name, category, price, current){
        if(!MenuItems.findOne({loyaltyNumber: loyaltyNumber})){
			MenuItems.insert({name: name,
                            category: category,
                            price: price,
                            current: current});
		}
	},
	editMenuItem: function(name, category, price, current){
		Customers.update({
			name: name
		}, {
			$set: {
				category: category,
                price: price,
                current: current,
			}
		});
	},
});

MenuItems.attachSchema(MenuItemSchema);