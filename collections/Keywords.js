Keywords = new Mongo.Collection('keywords');

Keywords.allow({
	insert: function(keyword, frequency) {
		return true;
		//return !!userId;
	},
	update: function(keyword, frequency) {
		return !!userId;
	},

});

KeywordSchema = new SimpleSchema({
	keyword: {
		type: String,
		label: "Keyword",
	},
	frequency: {
		type: Number,
		label: "Frequency",
	}
});

Meteor.methods({
	newKeyword: function(keyword, frequency){
		check(user, String);
		check(frequency, Number);

		if(!Keywords.findOne({keyword: keyword})){
			Keywords.insert({keyword: keyword, frequency: frequency});
		}
	},
	editKeyword: function(keyword, frequency){
		check(keyword, String);
		check(frequency, Number);

		Keywords.update({
			keyword: keyword
		}, {
			$set: {
				frequency: frequency
			}
		});
	},
});

Keywords.attachSchema(KeywordSchema);