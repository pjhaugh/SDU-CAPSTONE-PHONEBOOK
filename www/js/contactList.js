$('#contactListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getContacts.php?id='+id, getContactList(data));
});

var serviceURL = "http://localhost/directory/services/";

var contacts;

$('#contactListPage').bind('pageinit', function(event) {
	getContactList();
});

function getContactList() {
	$.getJSON(serviceURL + 'getContact.php', function(data) {
		$('#contactList li').remove();
		contacts = data.items;
		$.each(contacts, function(index, contact) {
			$('#contactList').append('<li><a href="tel:?id=' + contact.organization_id + '">' +
					'<h4>' + contact.name + contact.department + '<h/4>')
		});
		$('#contactList').listview('refresh');
	});
}		