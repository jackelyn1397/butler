FlowRouter.route('/', {
	name: 'Home',
	action: function(){
		BlazeLayout.render('RequestService');
	}
});

FlowRouter.route('/requestservice', {
	name: 'Request Service',
	action() {
		BlazeLayout.render('RequestService');
	}
});