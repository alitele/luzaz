function doClick(e) {
	alert($.label.text);
}

var Cloud = require('ti.cloud');
Cloud.debug = true;
// optional; if you add this line, set it to false for production
// example assumes you have a set of text fields named username, password, etc.
// Cloud.Users.create({
// username : "nagra1",
// password : "1234",
// password_confirmation : "1234",
// first_name : "Atif",
// last_name : "Ali"
// }, function(e) {
// if (e.success) {
// // user created successfully
// alert('User created');
// } else {
// // oops, something went wrong
// alert('User not created');
// }
// });

Cloud.Users.login({
	login : 'nagra',
	password : '1234'
}, function(e) {
	if (e.success) {
		var user = e.users[0];
		Alloy.createController('users').getView().open();
		//alert('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
	} else {
		alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
	}
});

var AtifsID = "";
function SendChat() {
	Cloud.Users.query({
		page : 1,
		per_page : 10
	}, function(e) {
		if (e.success) {
			alert('Success:\n' + 'Count: ' + e.users.length);
			for (var i = 0; i < e.users.length; i++) {
				var user = e.users[i];
				if (user.first_name == "Atif") {
					AtifsID = user.id;
					Cloud.Chats.create({
						to_ids : user.id,
						message : 'Good morning'
					}, function(e) {
						if (e.success) {
							for (var i = 0; i < e.chats.length; i++) {
								var chat = e.chats[i];
								alert('Success:\n' + 'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' + 'Updated: ' + chat.updated_at + '\n' + 'Message: ' + chat.message);
							}
						} else {
							alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
						}
					});
				}

				//alert('id: ' + user.id + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
			}
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

}

$.index.open();
