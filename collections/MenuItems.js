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
        if(!MenuItems.findOne({name: name})){
			MenuItems.insert({name: name,
                            category: category,
                            price: price,
                            current: current});
			console.log(MenuItems.find({}).fetch());
		}
	},
	editMenuItem: function(name, current){
		MenuItems.update({
			name: name
		}, {
			$set: {
                current: current
			}
		});
		//console.log(MenuItems.find({}).fetch());
	},
});

MenuItems.attachSchema(MenuItemSchema);