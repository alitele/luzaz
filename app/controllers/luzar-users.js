// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var UsersData=[];
FetchUsers();

function FetchUsers()
{
	for(var i=0;i<10;i++)
	{
		var row=Ti.UI.createTableViewRow({
			title:"User "+i,
			id:i,
			height:50,
			color:"#FFFFFF",
			backgroundColor:"#D50000",
			width:Ti.UI.FILL,
			top:5,
			bottom:5,
			left:5
		});
		
		
		UsersData.push(row);
	}
	$.table_users.setData(UsersData);

	$.table_users.addEventListener('click',function(e) {
		
		Alloy.createController('luzaz-chat').getView().open();
	
	});

}

$.users.open();
