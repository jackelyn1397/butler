FlowRouter.route('/', {
	name: 'Home Page',
	action: function(){
		BlazeLayout.render('HomePage');
	}
});

FlowRouter.route('/addCustomer', {
	name: 'Add Customer',
	action() {
		BlazeLayout.render('AddCustomer');
	}
});

FlowRouter.route('/editCustomer', {
	name: 'Edit Customer',
	action() {
		BlazeLayout.render('EditCustomer');
	}
});

FlowRouter.route('/searchCustomer', {
	name: 'Search Customer',
	action() {
		BlazeLayout.render('SearchCustomer');
	}
});

FlowRouter.route('/editMenu', {
	name: 'Edit Menu',
	action() {
		BlazeLayout.render('EditMenu');
	}
});