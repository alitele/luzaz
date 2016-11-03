// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var ChatsData=[];
FetchChats();

function FetchChats()
{
	for(var i=0;i<10;i++)
	{
		var row=Ti.UI.createTableViewRow({
			title:"Hi "+i,
			id:i,
			height:50,
			color:"#FFFFFF",
			backgroundColor:"#D50000",
			width:Ti.UI.FILL,
			top:5,
			bottom:5,
			left:5
		});
		
		
		ChatsData.push(row);
	}
	$.table_chats.setData(ChatsData);

	$.table_chats.addEventListener('click',function(e) {
		
		//Alloy.createController('luzar-users').getView().open();
	
	});

}

$.users.open();
