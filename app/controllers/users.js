// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var Cloud = require('ti.cloud');
Cloud.debug = true;
var args = $.args;
var UsersData = [];
SendChat();

function SendChat() {
	Cloud.Users.query({
		page : 1,
		per_page : 10
	}, function(e) {
		if (e.success) {
			for (var i = 0; i < e.users.length; i++) {
				var user = e.users[i];
				var row = Ti.UI.createTableViewRow({
					title : user.first_name + " " + user.last_name,
					color : "#000000",
					backgroundColor:"#CCCCCC",
					left:20,
					top:5
				});
				UsersData.push(row);
				// if (user.first_name == "Atif") {
				// AtifsID = user.id;
				// Cloud.Chats.create({
				// to_ids : user.id,
				// message : 'Good morning'
				// }, function(e) {
				// if (e.success) {
				// for (var i = 0; i < e.chats.length; i++) {
				// var chat = e.chats[i];
				// alert('Success:\n' + 'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' + 'Updated: ' + chat.updated_at + '\n' + 'Message: ' + chat.message);
				// }
				// } else {
				// alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
				// }
				// });
				// }

				//alert('id: ' + user.id + '\n' + 'first name: ' + user.first_name + '\n' + 'last name: ' + user.last_name);
			}
			$.table_users.setData(UsersData);
		} else {
			alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
		}
	});

}

